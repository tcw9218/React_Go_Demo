package database

import (
	"application/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	dsn := "host=localhost user=postgres password=00000000 dbname=postgres port=5432 sslmode=disable TimeZone=Asia/Shanghai"

	connection, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("could not connect to DB")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
