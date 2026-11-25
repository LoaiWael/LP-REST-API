import { createClient } from "redis";
import { redisConfig } from "../config.js";

const redisURL = `redis://:${redisConfig.password}@${redisConfig.host}:${redisConfig.port}`;

const client = createClient({ url: redisURL });

client.on("connect", () => {
    console.log("Redis client connecting...");
});

client.on("ready", () => {
    console.log("Redis client ready");
});

client.on("end", () => {
    console.log("Redis client connection closed");
});

client.on("reconnecting", () => {
    console.log("Redis client reconnecting...");
});

client.on("error", (err) => {
    console.error("Redis client error:", err);
});

export async function redisConnect() {
    if (client.isOpen) return;
    try {
        await client.connect();
    } catch (error) {
        console.error("Failed to connect to Redis, retrying in 5 sec");
        setTimeout(redisConnect, 5000);
    }
}

process.on("SIGINT", async () => {
    await client.quit();
    process.exit(0);
})

export default client;