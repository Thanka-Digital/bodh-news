package main

import (
	"thankadigital/bodhnews/db"
	"thankadigital/bodhnews/routes"

	"github.com/gofor-little/env"
)

func main() {
	if err := env.Load(".env"); err != nil {
		panic(err)
	}
	db.InitRedisDB()
	routes.StartServer()
}
