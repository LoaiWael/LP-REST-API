import client from "../lib/redis.js";

export async function setJson<T>(
    key: string,
    value: T,
    expireAtMS: number | null = null
) {
    const json = JSON.stringify(value);

    // time to live
    if (expireAtMS) {
        return client.set(key, json, { expiration: { type: "EX", value: expireAtMS } })
    }
    else {
        return client.set(key, json);
    }
}

export async function getJson(key: string) {
    const type = await client.type(key);
    if (type !== "string") return null;

    const json = await client.get(key);
    if (json) return JSON.parse(json);

    return null;
}