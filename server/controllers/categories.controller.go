package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"thankadigital/bodhnews/db"

	"github.com/gin-gonic/gin"
)

func GetCategories(c *gin.Context) {
	categories, err := db.RedisClient.LRange(db.Ctx, "categories", 0, -1).Result()
	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error getting categories",
		})
		return
	}
	jsonData := make([]Category, 0)
	for _, category := range categories {
		var categoryData Category
		err := json.Unmarshal([]byte(category), &categoryData)
		if err != nil {
			c.JSON(500, gin.H{
				"message": "Error getting categories",
			})
			return
		}
		jsonData = append(jsonData, categoryData)
	}
	c.JSON(200, gin.H{
		"data": jsonData,
	})
}

func CreateCategory(c *gin.Context) {
	var category Category
	if err := c.BindJSON(&category); err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{
			"message": "Invalid request",
		})
		return
	}
	categoryJson, err := json.Marshal(Category{
		Name: category.Name,
	})
	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error creating category",
		})
		return
	}
	err = db.RedisClient.LPush(db.Ctx, "categories", categoryJson).Err()
	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error saving category",
		})
		return
	}
	c.IndentedJSON(http.StatusCreated, category)
}

type Category struct {
	Name string `json:"name"`
}
