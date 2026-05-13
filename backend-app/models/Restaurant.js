const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    location: String,

    region: String,

    cuisine: [String],

    diningAtmosphere: String,

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
  mongoose.models.Restaurant ||
  mongoose.model("Restaurant", restaurantSchema);