import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    time: String,

    title: String,

    description: String,

    imageUrl: String,

    location: String,

    region: String,

    activityType: {
      type: String,
      enum: [
        "food",
        "hotel",
        "beach",
        "nightlife",
        "nature",
        "adventure",
        "culture",
        "shopping",
        "transport",
        "relaxation",
      ],
    },

    estimatedPrice: {
      type: Number,
      default: 0,
    },

    durationHours: Number,

    tags: [String],

    placeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
    },

    booking: {
      isReserved: {
        type: Boolean,
        default: false,
      },

      reservationStatus: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending",
      },

      reservationReference: String,

      reservedFor: {
        type: Number,
        default: 1,
      },

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

export default mongoose.model("Itinerary", itinerarySchema);