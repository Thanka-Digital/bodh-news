package controllers

import (
	"thankadigital/bodhnews/scraper"

	"github.com/gin-gonic/gin"
)

func GetScrappedNews(c *gin.Context) {
	news := scraper.ScrapeNews()
	c.JSON(200, gin.H{
		"message": news,
	})
}
