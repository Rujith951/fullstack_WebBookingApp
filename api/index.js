import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import hotelsRoute from "./routes/hotels.js";

dotenv.config();
const app = express();

app.use(express.json());
const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
	} catch (err) {
		throw err;
	}
};

app.use("/api/hotels", hotelsRoute);

app.listen("8000", () => {
	console.log("connected to backend");
	connect();
});
