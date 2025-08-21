import express from "express";
import { addHotel } from "../controllers/hotel.js";
const router = express.Router();

router.get("/", (req, res, next) => {
	res.send("Hi i am get all hotels route");
});

router.get("/:id", (req, res, next) => {
	res.send("Hi i am get hotels by id route");
});

router.post("/", addHotel);

router.delete("/:id", (req, res, next) => {
	res.send("Hi i am delete post hotels by id route");
});

export default router;
