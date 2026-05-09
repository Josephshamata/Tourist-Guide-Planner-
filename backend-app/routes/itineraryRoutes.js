const express = require("express");

const router = express.Router();

const {
  createItinerary,
  getAllItineraries,
  getItineraryById,
} = require("../controllers/itineraryController");

router.post("/", createItinerary);

router.get("/", getAllItineraries);

router.get("/:id", getItineraryById);

module.exports = router;