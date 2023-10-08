package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"todo_application/database"
	"todo_application/routes"
)

func main() {
	database.Connect()
	router := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:4000"}
	config.AllowHeaders = []string{"Origin, Content-Type, Accept"}

	router.Use(cors.New(config))
	routes.Setup(router)
	router.Run("localhost:3000")
}
