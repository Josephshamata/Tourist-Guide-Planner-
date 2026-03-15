const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  getEventBySlug,
  createEvent,
} = require("../controllers/eventController");

router.get("/", getAllEvents);
router.get("/:slug", getEventBySlug);
router.post("/", createEvent);

module.exports = router;