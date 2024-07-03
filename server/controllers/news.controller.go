package controllers

import (
	"thankadigital/bodhnews/scraper"

	"github.com/gin-gonic/gin"
)

func GetScrappedNews(c *gin.Context) {
	scraper.ScrapeNews()
	c.JSON(200, gin.H{
		"message": "News scrapped successfully!",
	})
}
