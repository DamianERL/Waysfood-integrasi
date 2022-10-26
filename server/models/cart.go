package models

import "time"

type Cart struct {
	ID        int       `json:"id" gorm:"primary_key:auto_increment" `
	QTY       int       `json:"qty"`
	Shipping  int       `json:"shipping"`
	Orders    []Order  `json:"order"`
	Status    string    `json:"status"`
	Total     int       `json:"total"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}
