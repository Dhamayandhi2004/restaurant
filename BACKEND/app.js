import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" }); // ✅ Load env first

import express from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

app.use(cors({
    origin: ["https://restaurant-hazel-three.vercel.app"], // ✅ Removed trailing slash
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter);

// Connect to DB and handle errors
dbConnection().catch((err) => {
    console.error("Database Connection Failed:", err);
    process.exit(1);
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
