package models

type Product struct {
	ID          uint   `json:"id"`
	Description string `json:"description"`
	Brand       string `json:"brand"`
}
