import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Update CORS to allow the new frontend URL
app.use(
  cors({
    origin: ["https://restaurant-peach-alpha.vercel.app"], // ✅ Updated frontend URL
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/api/v1/reservation", reservationRouter);

// Connect to the database
dbConnection().catch((err) => {
  console.error("Database Connection Failed:", err);
  process.exit(1);
});

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
