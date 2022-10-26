package cartdto

type CreateCart struct {
	QTY      int `json:"qty"`
	Shipping int `json:"shipping"`
	OrderID  int `json:"order_id"`
	Status   int `json:"Status"`
	Total    int `json:"total"`
}

type UpdateCart struct {
	SubTotal int `json:"Subtotal"`
	Shipping int `json:"shipping"`
	Total    int `json:"total"`
	Status   int `json:"Status"`
}
