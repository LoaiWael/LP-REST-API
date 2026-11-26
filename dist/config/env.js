import 'dotenv/config';
const env = {
    PORT: Number(process.env.PORT) || 5000,
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING ?? '',
    REDIS_HOST: process.env.REDIS_HOST ?? 'localhost',
    REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD ?? '',
};
export default env;
//# sourceMappingURL=env.js.map