package models

import "time"

type Product struct {
	ID        int       `json:"id" gorm:"primary_key:auto_increment"`
	Name      string    `json:"name" gorm:"type:varchar (255)"`
	Price     int       `json:"price" gorm:"type:int"`
	Image     string    `json:"image" gorm:"type:varchar(255)"`
	UserID    int       `json:"user_id" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	User      User      `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	OrderID   int       `json:"-"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}

type ProductResponse struct {
	ID     int    `json:"id"`
	Name   string `json:"Name"`
	Price  int    `json:"price"`
	Image  string `json:"image"`
	UserID int    `json:"-"`
}

func (ProductResponse) TableName() string {
	return "products"
}
