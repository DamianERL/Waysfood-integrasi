package models

import "time"

type Cart struct {
	ID        int         `json:"id" gorm:"primary_key:auto_increment" `
	UserID    int         `json:"-"`
	User      UserProfile `json:"user"`
	Order     []Order     `json:"order"`
	QTY       int         `json:"qty"`
	Shipping  int         `json:"shipping"`
	Status    string      `json:"status"`
	Total     int         `json:"total"`
	CreatedAt time.Time   `json:"-"`
	UpdatedAt time.Time   `json:"-"`
}
