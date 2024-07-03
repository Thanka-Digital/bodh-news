package controllers

import "github.com/gin-gonic/gin"

func GetSources(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Sources []",
	})
}
