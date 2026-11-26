import mongoose from "mongoose";
import env from "../config/env.js";
export function databaseConnect() {
    mongoose.connect(env.DB_CONNECTION_STRING)
        .then(() => {
        console.log('Connected to MongoDB');
    })
        .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}
//# sourceMappingURL=db.js.map