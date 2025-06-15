import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect("mongodb://root:1234@mongo:27017", {
      dbName: "travelly_db",
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
}
