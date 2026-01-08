import express from "express";
import cors from "cors";
import connectDB from "../db.js";

import foodRouter from "../routes/foodRoute.js";
import userRouter from "../routes/userRoute.js";
import orderRouter from "../routes/orderRoute.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// db connect
await connectDB();

// routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);

// export app (NOT listen)
export default app;
