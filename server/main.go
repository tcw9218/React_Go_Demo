package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"application/database"
	"application/routes"
)

func main() {
	database.Connect()
	engine := gin.Default()

	config := cors.Config{
		AllowOrigins: []string{"http://localhost:3000", "http://localhost", "http://127.0.0.1:3000", "http://127.0.0.1"},
		AllowMethods: []string{"PUT", "PATCH"},
		AllowHeaders: []string{"Origin, Content-Type, Accept"},
		// ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}
	engine.SetTrustedProxies(nil)
	engine.Use(cors.New(config))
	routes.Setup(engine)
	engine.Run("localhost:8000")
}
