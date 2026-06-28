import mongoose from "mongoose";
import { app } from "./app.js";

function startServer() {
  app.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}`)
  });

  mongoose.connect(process.env.DB_CONNECTION_STRING!)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    })
}

startServer();
