package main

import (
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"github.com/joho/godotenv"

	"application/database"
	"application/routes"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("env fail")
	}
	database.Connect()
	engine := gin.Default()
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
