import mongoose from "mongoose";

export default async () => {
  const connect = async () => {
    try {
      await mongoose.connect("mongodb://root:123456@localhost:27018/", {
        dbName: "social-media-backend",
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
