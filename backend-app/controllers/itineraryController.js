const Itinerary = require("../models/Itinerary");

const createItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.create(req.body);

    res.status(201).json({
      success: true,
      itinerary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find();

    res.status(200).json({
      success: true,
      itineraries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getItineraryById = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);

    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: "Itinerary not found",
      });
    }

    res.status(200).json({
      success: true,
      itinerary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createItinerary,
  getAllItineraries,
  getItineraryById,
};