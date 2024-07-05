package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"thankadigital/bodhnews/db"
	"thankadigital/bodhnews/types"

	"github.com/gin-gonic/gin"
)

func GetSources(c *gin.Context) {
	sources, err := db.RedisClient.LRange(db.Ctx, "sources", 0, -1).Result()
	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error getting sources",
		})
		return
	}
	jsonData := make([]types.Source, 0)
	for _, source := range sources {
		var sourceData types.Source
		err := json.Unmarshal([]byte(source), &sourceData)
		if err != nil {
			c.JSON(500, gin.H{
				"message": "Error getting sources",
			})
			return
		}
		jsonData = append(jsonData, sourceData)
	}
	c.JSON(200, gin.H{
		"data": jsonData,
	})
}

func CreateSource(c *gin.Context) {
	var source types.Source
	if err := c.BindJSON(&source); err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{
			"message": "Invalid request",
		})
		return
	}
	sourceJson, err := json.Marshal(types.Source{
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
