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

func Register(context *gin.Context) {
	var data map[string]string

	if err := context.ShouldBindJSON(&data); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)

	user := models.User{
		Name:     data["name"],
		Email:    data["email"],
		Password: password,
	}

	database.DB.Create(&user)
	context.JSON(http.StatusOK, user)
}
