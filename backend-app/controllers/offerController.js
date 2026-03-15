const Offer = require("../models/offers");

// Get all offers
const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find({ isPublished: true });

    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch offers",
      error: error.message
    });
  }
};

// Get signature offers
const getSignatureOffers = async (req, res) => {
  try {
    const offers = await Offer.find({
      type: "signature",
      isPublished: true
    });

    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch signature offers",
      error: error.message
    });
  }
};


const getPersonalityOffers = async (req, res) => {
  try {
    const offers = await Offer.find({
      type: "personality",
      isPublished: true
    });

    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch personality offers",
      error: error.message
    });
  }
};

module.exports = {
  getAllOffers,
  getSignatureOffers,
  getPersonalityOffers
};