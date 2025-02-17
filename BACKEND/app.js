import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// ✅ Fix CORS Issue
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://restaurant-jade-seven.vercel.app"); // Allow frontend
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // ✅ Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Database Connection
dbConnection();

// Error Middleware
app.use(errorMiddleware);

export default app;
