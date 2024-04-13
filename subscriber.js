require("dotenv").config()
const redis = require('./config/db');

const channel = process.env.CHANNEL|| "CHANNEL"

redis.subscribe(channel);

redis.on("message", function(channel, message) {
    console.log(`Message from  ${channel} "${message}" `);
});