const express = require("express");
const router = express.Router();

const { generateItinerary } = require("../controllers/aiController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/generate-itinerary", verifyToken, generateItinerary);

module.exports = router;