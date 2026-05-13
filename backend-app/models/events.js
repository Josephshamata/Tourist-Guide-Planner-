const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    day: {
      type: String,
      required: true,
    },

    month: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    region: {
      type: String,
      default: "Lebanon",
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    time: {
      type: String,
      required: true,
      trim: true,
    },

    durationHours: {
      type: Number,
      default: 2,
    },

    entry: {
      type: String,
      required: true,
      trim: true,
    },

    priceMin: {
      type: Number,
      default: 0,
    },

    priceMax: {
      type: Number,
      default: 0,
    },

    category: {
      type: String,
      default: "culture",
      trim: true,
    },

    audience: {
      type: [String],
      default: [],
    },

    tags: {
      type: [String],
      default: [],
    },

    imageUrl: {
      type: String,
      required: true,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Event || mongoose.model("Event", EventSchema);