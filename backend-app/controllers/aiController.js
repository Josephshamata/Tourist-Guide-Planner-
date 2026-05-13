const { generateTripWithAI } = require("../services/aiService");
const Itinerary = require("../models/itinerary");
const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

exports.generateItinerary = async (req, res) => {
  try {
    const { preferences } = req.body;

    if (!preferences) {
      return res.status(400).json({
        success: false,
        message: "Preferences are required",
      });
    }

    const aiItinerary = await generateTripWithAI(preferences);
    const uniqueSlug = `${createSlug(aiItinerary.title || "custom-itinerary")}-${Date.now()}`;

    const savedItinerary = await Itinerary.create({
      ...aiItinerary,
      slug: uniqueSlug,
      sourceType: "custom",
      preferences,
      userId: req.user.id,
      isPublished: true,
    });
    res.status(201).json({
      success: true,
      message: "AI itinerary generated successfully",
      itinerary: savedItinerary,
    });
  } catch (error) {
    console.error("AI itinerary error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate itinerary",
      error: error.message,
    });
  }
};
