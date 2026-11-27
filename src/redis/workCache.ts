import { REDIS_CACHE_DURATION_MILLIS } from "../config/constants.js";
import client from "../lib/redis.js";
import type { WorkDto } from "../types/index.js";
import { workKeys } from "./keys.js";
import { getJson, setJson } from "./query.js";

async function saveWorksToRedis(works: WorkDto[]) {
    const key = workKeys.getWorksKey()
    return setJson<WorkDto[]>(key, works, REDIS_CACHE_DURATION_MILLIS)
}

async function saveWorkDetailsToRedis(work: WorkDto) {
    const key = workKeys.getWorkDetailsKey(work.id)
    return setJson(key, work, REDIS_CACHE_DURATION_MILLIS)
}

async function fetchWorksFromRedis() {
    const key = workKeys.getWorksKey();
    return await getJson(key);
}

async function fetchWorkDetailsFromRedis(id: string) {
    const key = workKeys.getWorkDetailsKey(id);
    return await getJson(key);
}

async function invalidateWorkCache(id: string) {
    const workDetailsKey = workKeys.getWorkDetailsKey(id);
    const workKey = workKeys.getWorksKey();

    return Promise.all([
        client.del(workDetailsKey),
        client.del(workKey)
    ])
}

export default {
    saveWorksToRedis,
    saveWorkDetailsToRedis,
    fetchWorksFromRedis,
    fetchWorkDetailsFromRedis,
    invalidateWorkCache
}