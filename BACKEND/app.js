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
const cors = require('cors');
app.use(cors({
  origin: 'https://restaurant-jade-seven.vercel.app/', // Allow only your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Database Connection
dbConnection();

// Error Middleware
app.use(errorMiddleware);

export default app;
