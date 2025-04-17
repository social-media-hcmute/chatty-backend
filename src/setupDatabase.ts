import mongoose from "mongoose";
import { config } from "./config";

export default async () => {
  const connect = async () => {
    try {
      await mongoose.connect(`${config.DATABASE_URL}`, {
        dbName: config.DATABASE_NAME,
      });
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    }
  };
  await connect();

  mongoose.connection.on("disconnected", async () => {
    console.log("MongoDB disconnected. Reconnecting...");
    await connect();
  });
};
