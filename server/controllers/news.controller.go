package controllers

import (
	"encoding/json"
	"thankadigital/bodhnews/db"
	"thankadigital/bodhnews/scraper"
	"thankadigital/bodhnews/types"

	"github.com/gin-gonic/gin"
)

func GetScrappedNews(c *gin.Context) {
	// TODO: Implement logic to send already scrapped news to the scrapper function
	var news, err = db.RedisClient.LRange(db.Ctx, "news", 0, -1).Result()
	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error getting news",
		})
		return
	}
	if (len(news) > 0) {
		jsonData := make([]types.News, 0)
		for _, nw := range news {
			var newsData types.News
			err := json.Unmarshal([]byte(nw), &newsData)
			if err != nil {
				c.JSON(500, gin.H{
					"message": "Error unmarshalling news",
				})
				return
			}
			jsonData = append(jsonData, newsData)
		}
		c.JSON(200, gin.H{
			"data": jsonData,
		})
	} else {
		news := scraper.ScrapeNews()
		c.JSON(200, gin.H{
			"data": news,
		})
	}
}
