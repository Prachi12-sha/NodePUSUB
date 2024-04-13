require("dotenv").config()
const Redis = require("ioredis")

const redis = new Redis({
    host: process.env.HOST || "localhost",
    port: process.env.REDIS_PORT || 6379
})

redis.on("connect",()=>{
    console.log("Connected to Redis")
})

redis.on("error", (error) => {
    console.error("Redis connection error:", error);
});

module.exports =redis
