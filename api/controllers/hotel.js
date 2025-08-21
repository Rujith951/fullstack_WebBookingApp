import Hotel from "../models/Hotels.js";

export const addHotel = async (req, res, next) => {
	try {
		const newHotel = new Hotel(req.body);
		const savedHotel = await newHotel.save();
		res.send(savedHotel);
	} catch (err) {
		next(err);
	}
};
