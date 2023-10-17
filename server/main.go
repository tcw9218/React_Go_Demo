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
	// engine.Use(func(c *gin.Context) {
	// 	c.Header("Access-Control-Allow-Origin", "http://localhost:3000")
	// 	c.Next()
	// })
	// engine.Use(func(c *gin.Context) {
	// 	c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	// 	c.Header("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization")
	// 	if c.Request.Method == "OPTIONS" {
	// 		c.AbortWithStatus(204)
	// 		return
	// 	}
	// 	c.Next()
	// })
	config := cors.Config{
		AllowOrigins: []string{"https://w5bike.netlify.app", "http://localhost:3000"},
		AllowMethods: []string{"PUT", "PATCH", "OPTIONS"},
		AllowHeaders: []string{"Origin, Content-Type, Accept, Authorization"},
		// ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}
	engine.Use(cors.New(config))
	// engine.SetTrustedProxies(nil)

	routes.Setup(engine)
	engine.Run("localhost:8000")

}
