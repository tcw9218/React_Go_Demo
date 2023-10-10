package controllers

import (
	"application/database"
	"application/models"
	"errors"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"strconv"

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
	c.JSON(http.StatusOK, user)
}
