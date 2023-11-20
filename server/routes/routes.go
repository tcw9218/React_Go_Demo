package routes

import (
	"application/controllers"

	"github.com/gin-gonic/gin"
)

func Setup(router *gin.Engine) {
	router.GET("/", controllers.Test)
	router.GET("/todos", controllers.GetTodos)
	router.GET("/todos/:id", controllers.GetTodo)
	router.POST("/todos/:id/done", controllers.CompleteTodo)
	router.POST("/todos", controllers.AddTodo)
	router.POST("/api/register", controllers.Register)
	router.POST("/api/login", controllers.Login)
	router.GET("/api/user", controllers.User)
	router.POST("/api/logout", controllers.Logout)
}
