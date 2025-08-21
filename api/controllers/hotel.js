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

export const updateHotel = async (req, res, next) => {
	try {
		const updatedHotel = await Hotel.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.send(updatedHotel);
	} catch (err) {
		next(err);
	}
};

export const deleteHotel = async (req, res, next) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.send("Hotel deleted successfully");
	} catch (err) {
		next(err);
	}
};

export const getHotel = async (req, res, next) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.send(hotel);
	} catch (err) {
		next(err);
	}
};

export const getHotels = async (req, res, next) => {
	try {
		const hotels = await Hotel.find();
		res.send(hotels);
	} catch (err) {
		next(err);
	}
};
