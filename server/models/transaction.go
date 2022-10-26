package models

import "time"

type Transaction struct {
	ID        int       `json:"id" gorm:"primary_key:auto_increment" `
	BuyerID   int       `json:"buyer_id" gorm:"type:int"`
	Buyer     User      `json:"Buyer"`
	Status    string    `json:"json" gorm:"type:varchar(255)"`
	CartID    int       `json:"cart_id" gorm:"type:int" `
	Cart      Cart      `json:"cart"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}