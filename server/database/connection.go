package database

import (
	"application/models"
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	// dsn := "host=localhost user=postgres password=00000000 dbname=postgres port=5432 sslmode=disable"
	dsn := fmt.Sprintf("host=db user=%s password=%s dbname=%s port=5432 sslmode=disable",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"))

	connection, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("could not connect to DB")
	}

	DB = connection
	log.Println("Coneected to the DataBase")
	DB.AutoMigrate(&models.User{})
}
