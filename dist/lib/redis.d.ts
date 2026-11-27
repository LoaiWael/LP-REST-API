declare const client: import("redis").RedisClientType<{}, {}, {}, 3, {}>;
export declare function redisConnect(): Promise<void>;
export declare function isRedisConnected(): Promise<boolean>;
export default client;
//# sourceMappingURL=redis.d.ts.map