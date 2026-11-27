import type { Request, Response } from "express";
import { isDbConnected } from "../lib/db.js";
import { isRedisConnected } from "../lib/redis.js";

export const getHealth = async (_: Request, res: Response) => {
    const dbConnection = await isDbConnected();
    const redisConnection = await isRedisConnected();
    res.json({
        message: "server is running",
        database: dbConnection ? "connected" : "disconnected",
        redis: redisConnection ? "connected" : "disconnected",
    })
}