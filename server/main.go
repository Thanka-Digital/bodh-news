package main

import (
	"thankadigital/bodhnews/db"
	"thankadigital/bodhnews/routes"
)

func main() {
	db.InitRedisDB()
	routes.StartServer()
}
