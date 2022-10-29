package models

type Order struct {
	ID        int             `json:"id" gorm:"primary_key:auto_increment" `
	CartID    int             `json:"-" gorm:"primary_key:auto_increment"`
	ProductID int             `json:"-"`
	Product   ProductResponse `json:"product"`
	QTY       int             `json:"qty"`
	SubAmount int             `json:"sub_amount"`
}