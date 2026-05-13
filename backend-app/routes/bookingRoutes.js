const express = require("express");

const router = express.Router();

const {
  createBooking,
  getMyBookings,
  confirmBookingActivity,
  declineBookingActivity,
  checkBookingStatus
} = require("../controllers/bookingController");

const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken, createBooking);

router.get("/my-bookings", verifyToken, getMyBookings);

router.patch(
  "/:bookingId/activities/:activityId/confirm",
  verifyToken,
  confirmBookingActivity
);
router.get(
  "/check/:itineraryId",
  verifyToken,
  checkBookingStatus
);
router.delete(
  "/:bookingId/activities/:activityId",
  verifyToken,
  declineBookingActivity
);

module.exports = router;