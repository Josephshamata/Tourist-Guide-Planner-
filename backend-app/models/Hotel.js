const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    location: String,

    region: String,

    stars: {
      type: Number,
      default: 4,
    },

    pricePerNight: Number,

    comfortLevel: {
      type: String,
      enum: ["budget", "midrange", "premium", "luxury"],
    },

    stayType: {
      type: String,
      enum: ["city", "beach", "mountain", "boutique", "resort"],
    },

    amenities: [String],

    imageUrl: String,

    tags: [String],

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);