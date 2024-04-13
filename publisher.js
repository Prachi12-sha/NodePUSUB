require("dotenv").config()
const redis = require('./config/db');

const channel = process.env.CHANNEL|| "CHANNEL"

setInterval(() => {
    const msg = "New Message " + Math.random();
    redis.publish(channel, msg, function (err) {
        if (err) {
            console.error("Error publishing message:", err);
        }
        else{
            console.log(`Publish Message "${msg}" to the Channel ${channel}`)
        }
    });
   
}, 2000);
