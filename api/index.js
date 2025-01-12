import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes); 

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
