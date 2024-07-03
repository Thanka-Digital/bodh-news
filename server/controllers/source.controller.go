package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"thankadigital/bodhnews/db"

	"github.com/gin-gonic/gin"
)

func GetSources(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Sources []",
	})
}

func CreateSource(c *gin.Context) {
	var source Source
	if err := c.BindJSON(&source); err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{
			"message": "Invalid request",
		})
		return
	}
	sourceJson, err := json.Marshal(Source{
		Name:      source.Name,
		URL:       source.URL,
		Structure: source.Structure,
	})
	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error creating source",
		})
		return
	}
	err = db.RedisClient.LPush(db.Ctx, "sources", sourceJson).Err()
	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error saving source",
		})
		return
	}
	c.IndentedJSON(http.StatusCreated, source)
}

type Source struct {
	Name      string `json:"name"`
	URL       string `json:"url"`
	Structure string `json:"structure"`
}
