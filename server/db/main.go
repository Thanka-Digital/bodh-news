package db

import (
	"context"
	"fmt"
	"log"

	"github.com/gofor-little/env"
	"github.com/redis/go-redis/v9"
)

var Ctx = context.Background()
var RedisClient *redis.Client

func InitRedisDB() {
	opt, err := redis.ParseURL(env.Get("REDIS_DB_URI", "redis://localhost:6379"))
	if err != nil {
		log.Fatal("Error parsing Redis URL:", err)
	}

	client := redis.NewClient(opt)

	pong, err := client.Ping(Ctx).Result()
	if err != nil {
		log.Fatal("Error connecting to Redis:", err)
	}
	fmt.Println("Connected to Redis:", pong)

	RedisClient = client
}
