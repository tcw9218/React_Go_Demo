package main

import (
	"errors"
	"net/http"
	"strconv"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Todo struct {
	ID        int    `json:"id"`
	Item      string `json:"item"`
	Completed bool   `json:"completed"`
}

var todos = []Todo{}

func getTodos(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, todos)
}

func addTodo(context *gin.Context) {
	newTodo := &Todo{}
	// var newTodo Todo

	if err := context.BindJSON(&newTodo); err != nil {
		return
	}
	newTodo.ID = len(todos) + 1
	todos = append(todos, *newTodo)

	context.IndentedJSON(http.StatusCreated, newTodo)
}

func getTodo(context *gin.Context) {
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

func completeTodo(context *gin.Context) {
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

func getTodoById(id int) (*Todo, error) {
	for i, t := range todos {
		if t.ID == id {
			return &todos[i], nil

		}
	}
	return nil, errors.New("no specfic todo ID")
}

func main() {
	router := gin.Default()
	router.Use(cors.Default())
	// router.Use(cors.New(cors.Config{
	// 	AllowOrigins: []string{"http://localhost:3000"},
	// 	AllowMethods: []string{"PUT", "PATCH"},
	// 	AllowHeaders: []string{"Origin,Content-Type,Accept"},
	// }))
	router.GET("/todos", getTodos)
	router.GET("/todos/:id", getTodo)
	router.POST("/todos/:id/done", completeTodo)
	router.POST("/todos", addTodo)
	router.Run("localhost:3000")
}
