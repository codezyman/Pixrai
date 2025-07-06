import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";
import paymentRouter from "./routes/paymentRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors({
  origin: '*', // Allow all origins for testing
  credentials: true,
}));

app.use(express.json());

await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
app.use("/api/payment", paymentRouter);

app.get("/", (req, res) => res.send("API Working "));

app.listen(PORT, () => console.log("Server is running on port" + PORT));
