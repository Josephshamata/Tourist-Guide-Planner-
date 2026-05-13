const Booking = require("../models/Booking");
const Itinerary = require("../models/itinerary.js");

const createBooking = async (req, res) => {
  try {
    const { itineraryId, startDate, endDate, guests } = req.body;

    const itinerary = await Itinerary.findById(itineraryId);

    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: "Itinerary not found",
      });
    }

    const activityStatuses = [];

    itinerary.days.forEach((day) => {
      day.activities.forEach((activity) => {
        activityStatuses.push({
          activityId: activity.id,
          reservationStatus:
            activity.booking?.reservationStatus || "pending",
        });
      });
    });

    const booking = await Booking.create({
      userId: req.user.id,
      itineraryId: itinerary.id,
      startDate,
      endDate,
      guests: guests || 2,
      totalPrice: itinerary.estimatedTotalPrice || 0,
      activityStatuses,
      tripStatus: "upcoming",
      bookingStatus: "confirmed",
    });

    res.status(201).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      userId: req.user.id,
    }).populate("itineraryId");

    res.status(200).json({
      success: true,
      upcomingTrips: bookings.filter(
        (booking) => booking.tripStatus === "upcoming"
      ),
      completedTrips: bookings.filter(
        (booking) => booking.tripStatus === "completed"
      ),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const confirmBookingActivity = async (req, res) => {
  try {
    const { bookingId, activityId } = req.params;

    const booking = await Booking.findOne({
      id: bookingId,
      userId: req.user.id,
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    const activityStatus = booking.activityStatuses.find(
      (item) => item.activityId.toString() === activityId
    );

    if (!activityStatus) {
      return res.status(404).json({
        success: false,
        message: "Activity status not found",
      });
    }

    activityStatus.reservationStatus = "confirmed";

    await booking.save();

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const checkBookingStatus = async (req, res) => {
  try {
    const { itineraryId } = req.params;

    const existingBooking = await Booking.findOne({
      userId: req.user.id,
      itineraryId,
      tripStatus: { $ne: "cancelled" },
    });

    res.status(200).json({
      success: true,
      alreadyBooked: !!existingBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const declineBookingActivity = async (req, res) => {
  try {
    const { bookingId, activityId } = req.params;

    const booking = await Booking.findOne({
      _id: bookingId,
      userId: req.user.id,
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.activityStatuses = booking.activityStatuses.filter(
      (item) => item.activityId.toString() !== activityId
    );

    await booking.save();

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
  confirmBookingActivity,
  declineBookingActivity,
  checkBookingStatus
};