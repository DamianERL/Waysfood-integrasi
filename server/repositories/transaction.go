package repositories

import "waysfood/models"

type TransactionRepository interface {
	FindTransaction() ([]models.Transaction,error)
	GetTransaction(ID int) (models.Transaction,error)
	CreateTransaction (transaction models.Transaction)(models.Transaction,error)
	UpdateTransaction (transaction models.Transaction)(models.Transaction,error)
	DeleteTransaction (transaction models.Transaction)(models.Transaction,error)
}