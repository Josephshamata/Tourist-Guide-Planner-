const Event = require("../models/events");

// Get all published events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ isPublished: true }).sort({ createdAt: -1 });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch events",
      error: error.message
    });
  }
};

// Optional: get one event by slug (for later details page)
const getEventBySlug = async (req, res) => {
  try {
    const event = await Event.findOne({
      slug: req.params.slug,
      isPublished: true
    });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch event",
      error: error.message
    });
  }
};

// Optional: create event (useful for testing/Postman)
const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    const savedEvent = await event.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create event",
      error: error.message
    });
  }
};

module.exports = {
  getAllEvents,
  getEventBySlug,
  createEvent
};