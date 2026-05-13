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

const confirmActivity = async (req, res) => {
  try {
    const { itineraryId, activityId } = req.params;

    const itinerary = await Itinerary.findById(itineraryId);

    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: "Itinerary not found",
      });
    }

    let updatedActivity = null;

    itinerary.days.forEach((day) => {
      const activity = day.activities.id(activityId);

      if (activity) {
        if (!activity.booking) {
          activity.booking = {};
        }

        activity.booking.reservationStatus = "confirmed";
        activity.booking.isReserved = true;
        updatedActivity = activity;
      }
    });

    if (!updatedActivity) {
      return res.status(404).json({
        success: false,
        message: "Activity not found",
      });
    }

    await itinerary.save();

    res.status(200).json({
      success: true,
      activity: updatedActivity,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getMyTrips = async (req, res) => {
  try {
    const userId = req.user._id;

    const itineraries = await Itinerary.find({ userId }).sort({
      startDate: 1,
    });

    const upcomingTrips = itineraries.filter(
      (trip) => trip.tripStatus === "upcoming"
    );

    const completedTrips = itineraries.filter(
      (trip) => trip.tripStatus === "completed"
    );

    res.status(200).json({
      success: true,
      upcomingTrips,
      completedTrips,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const declineActivity = async (req, res) => {
  try {
    const { itineraryId, activityId } = req.params;

    const itinerary = await Itinerary.findById(itineraryId);

    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: "Itinerary not found",
      });
    }

    let deleted = false;

    itinerary.days.forEach((day) => {
      const activity = day.activities.id(activityId);

      if (activity) {
        activity.deleteOne();
        deleted = true;
      }
    });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Activity not found",
      });
    }

    await itinerary.save();

    res.status(200).json({
      success: true,
      message: "Activity declined and removed",
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
  confirmActivity,
  declineActivity,
};