package database

import (
	"fmt"
	"waysfood/models"
	"waysfood/pkg/mysql"
)

func RunMigration() {
	err := mysql.DB.AutoMigrate(
		&models.User{},
		&models.Cart{},
		&models.Order{},
		&models.Product{},
		&models.Transaction{},
	)
	if err != nil {
		fmt.Println(err)
		panic("Migration Failed")
	}

	fmt.Println(("Migration success"))
}
