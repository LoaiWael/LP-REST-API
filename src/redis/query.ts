import client from "../lib/redis.js";

export async function setJson(
    key: string,
    value: Record<string, unknown>,
    expireAt: Date | null = null
) {
    const json = JSON.stringify(value);

    // time to live
    if (expireAt) {
        const ttlMili = expireAt.getTime() - Date.now();
        return client.set(key, json, { expiration: { type: "EX", value: ttlMili } })
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