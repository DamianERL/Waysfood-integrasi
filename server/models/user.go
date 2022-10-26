package models

import "time"

type User struct {
	ID        int               `json:"id" gorm:"primary_key:auto_increment"`
	Name      string            `json:"name" gorm:"type: varchar(255)"`
	Email     string            `json:"email" gorm:"type: varchar(255)"`
	Password  string            `json:"password" gorm:"type: varchar(255)"`
	Gender    string            `json:"gender" gorm:"type: varchar(255)"`
	Phone     string            `json:"phone" gorm:"type: varchar(255)"`
	Role      string            `json:"role" gorm:"type: varchar(255)"`
	Location  string            `json:"location" gorm:"type:varchar(255)"`
	Image     string            `json:"image" gorm:"type:varchar(255)"`
	Products  []ProductResponse `json:"product" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;" `
	CreatedAt time.Time         `json:"-"`
	UpdatedAt time.Time         `json:"-"`
}
