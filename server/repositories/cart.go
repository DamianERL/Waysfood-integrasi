package repositories

import (
	"waysfood/models"

	"gorm.io/gorm"
)

type CartRepository interface {
	FindCart() ([]models.Cart, error)
	GEtCart(ID int) (models.Cart, error)
	CreateCart(cart models.Cart) (models.Cart, error)
	UpdateCart(cart models.Cart) (models.Cart, error)
	DeleteCart(cart models.Cart) (models.Cart, error)
}

func RepositoryCart(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindCart() ([]models.Cart, error) {
	var cart []models.Cart
	err := r.db.Find(&cart).Error

	return cart, err
}

func (r *repository) GEtCart(ID int) (models.Cart, error) {
	var cart models.Cart
	err := r.db.First(&cart, ID).Error

	return cart, err
}

func (r *repository) CreateCart(cart models.Cart) (models.Cart, error) {
	err := r.db.Create(&cart).Error

	return cart, err
}

func (r *repository) UpdateCart(cart models.Cart) (models.Cart, error) {
	err := r.db.Save(&cart).Error
	return cart, err
}

func (r *repository) DeleteCart(cart models.Cart) (models.Cart, error) {
	err := r.db.Delete(&cart).Error
	return cart, err
}
