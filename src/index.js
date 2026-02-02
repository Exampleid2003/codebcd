import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./db/index.js";
import { app } from "./app.js";


const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });

    server.on("error", (error) => {
      console.error("Server Error:", error);
      process.exit(1);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed!!!", err);
    process.exit(1);
  });





/*
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";

dotenv.config();
const app = express();

(async () => {
  try {
    if (!process.env.MONGODB_URI || !process.env.PORT) {
      throw new Error("Missing environment variables");
    }

    await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("MongoDB connected");

    const server = app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });

    server.on("error", (error) => {
      console.error("Server Error:", error);
      process.exit(1);
    });

  } catch (error) {
    console.error("Startup Error:", error);
    process.exit(1);
  }
})();
*/
