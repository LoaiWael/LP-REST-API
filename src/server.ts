import { app } from "./app.js";
import { redisConnect } from "./lib/redis.js";
import env from "./config/env.js";
import { databaseConnect } from "./lib/db.js";

function startServer() {
  app.listen(env.PORT, () => {
    console.log(`Listening at port ${env.PORT}`)
  });

  databaseConnect();

  redisConnect();
}

startServer();
