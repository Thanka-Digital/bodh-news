package scraper

import (
	"encoding/csv"
	"fmt"
	"log"
	"os"

	"github.com/gocolly/colly"
)

func ScrapeNews() {
	collector := colly.NewCollector(
		colly.Async(true),
	)
	collector.Limit(&colly.LimitRule{
		Parallelism: 4,
	})

	pagesToScrape := []string{
		"https://ekantipur.com/",
		"https://sagarmatha.tv/",
		"https://www.onlinekhabar.com/",
		// "https://www.hamropatro.com/news/international",
	}

	var newsList []News

	collector.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting", r.URL)
	})
	collector.OnResponse(func(r *colly.Response) {
		fmt.Println("Got a response from", r.Request.URL)
	})

	// ekantipur
	collector.OnHTML("article", func(article *colly.HTMLElement) {
		news := News{}

		news.url = article.ChildAttr("a", "href")
		news.name = article.ChildText("h2")
		news.source = "ekantipur"

		newsList = append(newsList, news)
	})

	// collector.OnHTML("div.chip", func(source *colly.HTMLElement) {
	// 	s := News{}

	// 	s.url = ""
	// 	s.name = source.ChildText("span")
	// 	s.source = "hamropatro"

	// 	newsList = append(newsList, s)
	// })

	// Sagarmatha
	collector.OnHTML("section.no-section-full", func(section *colly.HTMLElement) {
		news := News{}

		news.url = section.ChildAttr("a", "href")
		news.name = section.ChildText("h2")
		news.source = "sagarmatha"

		newsList = append(newsList, news)
	})

	// Onlinekhabar
	collector.OnHTML("section.ok-bises", func(section *colly.HTMLElement) {
		news := News{}

		news.url = section.ChildAttr("a", "href")
		news.name = section.ChildText("h2")
		news.source = "onlinekhabar"

		newsList = append(newsList, news)
	})

	collector.OnScraped(func(c *colly.Response) {
		file, err := os.Create("output/news.csv")
		if err != nil {
			log.Fatalln("Failed to create output CSV file", err)
		}

		// json.NewEncoder(file).Encode(newsList)
		defer file.Close()

		writer := csv.NewWriter(file)

		headers := []string{
			"URL",
			"Name",
			"Source",
		}
		writer.Write(headers)

		for _, news := range newsList {
			record := []string{
				news.url,
				news.name,
				news.source,
			}
			writer.Write(record)
		}
		defer writer.Flush()
	})
	collector.OnError(func(r *colly.Response, e error) {
		fmt.Println("Blimey, an error occurred!:", e)
	})

	for _, page := range pagesToScrape {
		collector.Visit(page)
	}
	collector.Wait()
}

type News struct {
	url    string
	name   string
	source string
}
