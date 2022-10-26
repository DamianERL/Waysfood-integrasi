package models

type Order struct {
	ID        int     `json:"id" gorm:"primary_key:auto_increment" `
	ProductID int     `json:"product_id"`
	Product   Product `json:"product"`
	CartID    int     `json:"cart_id"`
	QTY       int     `json:"QTY"`
	SubAmount int     `json:"sub_amount"`
}

type OrderCart struct {
	ID        int     `json:"id"`
	ProductID int     `json:"product_id"`
	Product   Product `json:"product"`
	QTY       int     `json:"QTY"`
	SubAmount int     `json:"sub_amount"`
	CartID    int     `json:"-"`
}