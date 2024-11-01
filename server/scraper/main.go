package scraper

import (
	"encoding/json"
	"fmt"
	"log"
	"strings"
	"thankadigital/bodhnews/db"
	"thankadigital/bodhnews/types"
	"time"

	"github.com/gocolly/colly"
)

func ScrapeNews() []types.News {
	collector := colly.NewCollector(
		colly.Async(true),
	)
	collector.Limit(&colly.LimitRule{
		Parallelism: 4,
	})

	sources, err := db.RedisClient.LRange(db.Ctx, "sources", 0, -1).Result()
	if err != nil {
		log.Fatalln("Error getting sources", err)
	}
	jsonData := make([]types.Source, 0)
	for _, source := range sources {
		var sourceData types.Source
		err := json.Unmarshal([]byte(source), &sourceData)
		if err != nil {
			log.Fatalln("Error getting sources", err)
		}
		jsonData = append(jsonData, sourceData)
	}

	var pagesToScrape = []types.Source{}
	pagesToScrape = append(pagesToScrape, jsonData...)

	var newsList []types.News

	collector.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting", r.URL)
	})
	collector.OnResponse(func(r *colly.Response) {
		fmt.Println("Got a response from", r.Request.URL)
	})

	for _, page := range pagesToScrape {
		structures := strings.Split(page.Structure, " ")
		collector.OnHTML(structures[0], func(article *colly.HTMLElement) {
			news := types.News{}

			news.Title = article.ChildText(structures[1])

			urlStructure := strings.Split(structures[2], "-")
			news.URL = article.ChildAttr(urlStructure[0], urlStructure[1])

			// news.Date = article.ChildText(structures[3])
			news.Summary = article.ChildText(structures[3])

			// TODO: Fix the image src
			imgStructure := strings.Split(structures[4], "-")
			news.ImageUrl = article.ChildAttr(imgStructure[0], imgStructure[1])

			news.Source = page.Name
			news.Category = page.Category

			newsList = append(newsList, news)
		})
	}

	collector.OnScraped(func(c *colly.Response) {
		// TODO: Optimize the array push

		for _, news := range newsList {
			newsJson, err := json.Marshal(types.News{
				Title:    news.Title,
				URL:      news.URL,
				Source:   news.Source,
				Category: news.Category,
				Date:     news.Date,
				Summary:  news.Summary,
				ImageUrl: news.ImageUrl,
			})
			if err != nil {
				log.Fatalln("Error creating news", err)
			}
			err = db.RedisClient.LPush(db.Ctx, "news", newsJson).Err()
			if err != nil {
				log.Fatalln("Error saving news", err)
			}
		}

		db.RedisClient.ExpireAt(db.Ctx, "news", time.Now().Add(time.Hour*24))
	})

	collector.OnError(func(r *colly.Response, e error) {
		fmt.Println("Blimey, an error occurred!:", e)
	})

	for _, page := range pagesToScrape {
		collector.Visit(page.URL)
	}
	collector.Wait()

	return newsList
}
