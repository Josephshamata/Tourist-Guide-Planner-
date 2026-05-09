const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    time: String,
    title: String,
    description: String,
    imageUrl: String,
    location: String,
    region: String,
    activityType: String,
    estimatedPrice: Number,
    durationHours: Number,
    tags: [String],

    booking: {
      isReserved: Boolean,
      reservationStatus: String,
      reservationReference: String,
      reservedFor: Number,

      contactInfo: {
        placeName: String,
        phone: String,
        whatsapp: String,
        instagram: String,
        website: String,
      },
    },
  },
  { _id: true }
);

const daySchema = new mongoose.Schema(
  {
    dayNumber: Number,

    title: String,

    region: String,

    estimatedDayPrice: {
      type: Number,
      default: 0,
    },

    activities: [activitySchema],
  },
  { _id: true }
);

const itinerarySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
    },

    sourceType: {
      type: String,
      enum: ["experience", "custom"],
      required: true,
    },

    coverImage: String,

    summary: String,

    durationDays: Number,

    estimatedTotalPrice: {
      type: Number,
      default: 0,
    },

    categories: [String],

    mainPlaces: [String],

    tripStatus: {
      type: String,
      enum: ["upcoming", "completed", "cancelled"],
      default: "upcoming",
    },

    startDate: Date,
    endDate: Date,

    bookingStatus: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "confirmed",
    },

    hotel: {
      name: String,
      location: String,
      stars: Number,
      imageUrl: String,
    },

    services: {
      driverIncluded: {
        type: Boolean,
        default: false,
      },

      tourGuideIncluded: {
        type: Boolean,
        default: false,
      },

      airportPickup: {
        type: Boolean,
        default: false,
      },

      vipAccess: {
        type: Boolean,
        default: false,
      },
    },

    costBreakdown: {
      hotelCost: {
        type: Number,
        default: 0,
      },

      foodCost: {
        type: Number,
        default: 0,
      },

      transportCost: {
        type: Number,
        default: 0,
      },

      activitiesCost: {
        type: Number,
        default: 0,
      },

      totalCost: {
        type: Number,
        default: 0,
      },
    },

    preferences: {
      // STEP 1
      travelParty: String,
      ageRange: String,
      month: String,
      tripDays: Number,

      // STEP 2
      experiences: [String],

      // STEP 3
      nightlifeVibes: [String],

      // STEP 4
      foodPreferences: [String],
      diningAtmosphere: String,
      foodExplorationLevel: String,

      // STEP 5
      comfortLevel: String,
      stayType: String,

      // STEP 6
      requestedServices: [String],

      // CONTACT INFO
      fullName: String,
      email: String,
      phone: String,
    },

    days: [daySchema],

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Itinerary", itinerarySchema);