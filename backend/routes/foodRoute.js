import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import upload from "../middleware/upload.js"; // 👈 Cloudinary upload

const foodRouter = express.Router();

// add food (Cloudinary)
foodRouter.post("/add", upload.single("image"), addFood);

// list & remove
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
