import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// CORS Configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL.split(","), // Supports multiple origins if needed
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Database Connection
dbConnection();

// Error Middleware
app.use(errorMiddleware);

export default app;
