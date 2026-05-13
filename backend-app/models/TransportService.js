const mongoose = require("mongoose");

const TransportServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["driver", "airport-pickup", "transfer"],
      required: true,
    },

    region: {
      type: String,
      default: "All Lebanon",
      trim: true,
    },

    pricePerDay: {
      type: Number,
      default: 0,
    },

    pricePerTransfer: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    contactInfo: {
      phone: {
        type: String,
        default: "",
      },
      whatsapp: {
        type: String,
        default: "",
      },
      instagram: {
        type: String,
        default: "",
      },
      website: {
        type: String,
        default: "",
      },
    },

    isPartner: {
      type: Boolean,
      default: true,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.TransportService ||
  mongoose.model("TransportService", TransportServiceSchema);