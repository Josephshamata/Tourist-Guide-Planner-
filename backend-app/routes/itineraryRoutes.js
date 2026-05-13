const express = require("express");

const router = express.Router();

const {
  createItinerary,
  getAllItineraries,
  getItineraryById,
  confirmActivity,
  declineActivity,

} = require("../controllers/itineraryController");

const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", createItinerary);



router.get("/", getAllItineraries);

router.get("/:id", getItineraryById);

router.patch(
  "/:itineraryId/activities/:activityId/confirm",
  confirmActivity
);

router.delete(
  "/:itineraryId/activities/:activityId",
  declineActivity
);

module.exports = router;