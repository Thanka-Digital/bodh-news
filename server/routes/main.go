package routes

import (
	"thankadigital/bodhnews/controllers"

	"github.com/gin-gonic/gin"
)

func StartServer() {
	router := gin.Default()
	router.GET("/news", controllers.GetScrappedNews)
	router.GET("/sources", controllers.GetSources)

	router.Run("localhost:5000")
}
