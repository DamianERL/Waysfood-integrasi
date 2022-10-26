package ordersdto

type OrderRequest struct {
	ProductID int `json:"product_id"`
	QTY       int `json:"qty"`
	SubAmount int `json:"suba_mount"`
}

type OrderUpdate struct {
	Qty       int `json:"qty"`
	SubAmount int `json:"sub_amount"`
}

