const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  getEventBySlug,
  createEvent,
} = require("../controllers/eventController");

const { verifyToken } = require("../middleware/authMiddleware");

router.get("/", getAllEvents);
router.get("/:slug", getEventBySlug);
router.post("/", verifyToken, createEvent);

module.exports = router;