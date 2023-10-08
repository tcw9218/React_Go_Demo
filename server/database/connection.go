package database

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func Connect() {
	dsn := "host=localhost user=postgres password=00000000 dbname=postgres port=5432 sslmode=disable TimeZone=Asia/Shanghai"

	_, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("could not connect to DB")
	}
}
