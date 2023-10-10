package routes

import (
	"github.com/gin-gonic/gin"
	"application/controllers"
)

func Setup(router *gin.Engine) {
	router.GET("/todos", controllers.GetTodos)
	router.GET("/todos/:id", controllers.GetTodo)
	router.POST("/todos/:id/done", controllers.CompleteTodo)
	router.POST("/todos", controllers.AddTodo)
	router.POST("/api/register", controllers.Register)
}
