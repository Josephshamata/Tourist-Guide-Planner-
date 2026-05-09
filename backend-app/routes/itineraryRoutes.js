const express = require("express");

const router = express.Router();

const {
  createItinerary,
  getAllItineraries,
  getItineraryById,
  confirmActivity,
  declineActivity,
} = require("../controllers/itineraryController");

router.post("/", createItinerary);

router.get("/", getAllItineraries);

router.get("/:id", getItineraryById);

// confirm pending activity
router.patch(
  "/:itineraryId/activities/:activityId/confirm",
  confirmActivity
);

// decline/delete activity
router.delete(
  "/:itineraryId/activities/:activityId",
  declineActivity
);

module.exports = router;