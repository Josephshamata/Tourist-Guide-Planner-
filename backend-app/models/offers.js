const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema(
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

    type: {
      type: String,
      enum: ["signature", "personality"],
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    days: {
      type: Number,
      required: true,
      min: 1,
    },

    mainPlaces: {
      type: [String],
      default: [],
    },

    hotelName: {
      type: String,
      default: "",
    },

    categories: {
      type: [String],
      default: [],
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Offer", OfferSchema);
