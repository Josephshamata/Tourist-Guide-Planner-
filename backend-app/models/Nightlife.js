const mongoose = require("mongoose");

const nightlifeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    location: String,

    region: String,

    vibe: [String],

    musicType: [String],

    averagePrice: Number,

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
  mongoose.models.Nightlife ||
  mongoose.model("Nightlife", nightlifeSchema);