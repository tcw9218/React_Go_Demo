package models

import "time"

type User struct {
	ID       uint      `json:"id"`
	Name     string    `json:"name"`
	Email    string    `json:"email" gorm:"unique"`
	Iat      time.Time `json:"iat"`
	Password []byte    `json:"-"`
}
