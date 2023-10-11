package controllers

import (
	"application/database"
	"application/models"
	"errors"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"golang.org/x/crypto/bcrypt"

	"github.com/dgrijalva/jwt-go/v4"
	"github.com/gin-gonic/gin"
)

type Todo struct {
	ID        int    `json:"id"`
	Item      string `json:"item"`
	Completed bool   `json:"completed"`
}

var todos = []Todo{}

func GetTodos(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, todos)
}

func CompleteTodo(context *gin.Context) {
	id := context.Param("id")
	idInt, err := strconv.Atoi(id)
	if err != nil {
		return
	}
	todo, err := getTodoById(idInt)

	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "Notfound"})

	}

	todo.Completed = true
	context.IndentedJSON(http.StatusOK, todo)
}

func AddTodo(context *gin.Context) {
	newTodo := &Todo{}
	// var newTodo Todo

	if err := context.BindJSON(&newTodo); err != nil {
		return
	}
	newTodo.ID = len(todos) + 1
	todos = append(todos, *newTodo)

	context.IndentedJSON(http.StatusCreated, newTodo)
}

func GetTodo(context *gin.Context) {
	id := context.Param("id")
	idInt, err := strconv.Atoi(id)
	if err != nil {
		return
	}
	todo, err := getTodoById(idInt)

	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "not found"})
	}

	context.IndentedJSON(http.StatusOK, todo)
}

func getTodoById(id int) (*Todo, error) {
	for i, t := range todos {
		if t.ID == id {
			return &todos[i], nil

		}
	}
	return nil, errors.New("no specfic todo ID")
}

const mySigningKey = "SecretJwtKey"

func Register(c *gin.Context) {
	var data map[string]string

	if err := c.ShouldBindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Register error": err.Error()})
		return
	}
	password, err := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}
	user := models.User{
		Name:     data["name"],
		Email:    data["email"],
		Password: password,
	}
	database.DB.Create(&user)
	c.JSON(http.StatusOK, user)
}

func Login(c *gin.Context) {
	var data map[string]string

	if err := c.ShouldBindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"login error": err.Error()})
		return
	}

	var user models.User

	database.DB.Where("email = ?", data["email"]).First(&user)

	if user.ID == 0 {
		c.JSON(http.StatusNotFound, "usr not found")
		return
	}

	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {
		c.JSON(http.StatusBadRequest, "incorrect password")
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user_id": user.ID,
		"iat":     time.Now(),
		"exp":     time.Now().Add(time.Hour * 24).Unix(),
	})

	ss, err := token.SignedString([]byte(mySigningKey))
	if err != nil {
		c.JSON(http.StatusInternalServerError, "could not logiin")
		return
	}

	c.SetCookie("jwt", ss, 3600*24, "/", "localhost", true, true)
	c.JSON(http.StatusOK, gin.H{
		"message": "success",
	})
}

func User(c *gin.Context) {
	cookie, err := c.Cookie("jwt")
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		c.Abort()
		return
	}

	token, err := jwt.Parse(cookie, func(token *jwt.Token) (interface{}, error) {
		// Check the signing method, which should match the one used during token creation.
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method")
		}

		return []byte(mySigningKey), nil
	})

	if err != nil {
		c.JSON(http.StatusUnauthorized, "Token Expired")
	}

	// Check if the token is valid.
	var user models.User

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		// You can access the user's information from the claims.
		fmt.Println("claims", claims["user_id"])
		database.DB.Where("id = ?", claims["user_id"]).First(&user)

	} else {
		fmt.Println("ok", ok)
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		c.Abort()
		return
	}
	c.JSON(http.StatusOK, user)
}
