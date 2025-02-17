import app from "./app.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./config/config.env" });

const PORT =  4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
