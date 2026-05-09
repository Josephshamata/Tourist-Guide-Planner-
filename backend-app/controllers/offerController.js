const Offer = require("../models/offers");

// GET /api/offers
const getAllOffers = async (req, res) => {
  try {
    const {
      search,
      category,
      region,
      minPrice,
      maxPrice,
      minDays,
      maxDays,
      sort = "recommended",
      page = 1,
      limit = 12,
    } = req.query;

    const query = {
      isPublished: true,
    };

    // Search
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { mainPlaces: { $regex: search, $options: "i" } },
        { categories: { $regex: search, $options: "i" } },
        { hotelName: { $regex: search, $options: "i" } },
      ];
    }

    // Category
    if (category && category !== "all") {
      query.categories = {
        $in: [category],
      };
    }

    // Region
    if (region && region !== "All Regions") {
      query.mainPlaces = {
        $regex: region,
        $options: "i",
      };
    }

    // Price range
    if (minPrice || maxPrice) {
      query.totalPrice = {};

      if (minPrice && maxPrice) {
        query.totalPrice.$gte = Number(minPrice);
        query.totalPrice.$lte = Number(maxPrice);
      } else if (minPrice) {
        query.totalPrice = Number(minPrice);
      } else if (maxPrice) {
        query.totalPrice = Number(maxPrice);
      }
    }

    // Duration range
    if (minDays || maxDays) {
      query.days = {};

      if (minDays && maxDays) {
        query.days.$gte = Number(minDays);
        query.days.$lte = Number(maxDays);
      } else if (minDays) {
        query.days = Number(minDays);
      } else if (maxDays) {
        query.days = Number(maxDays);
      }
    }

    let sortOption = { createdAt: -1 };

    if (sort === "price-low") {
      sortOption = { totalPrice: 1 };
    }

    if (sort === "price-high") {
      sortOption = { totalPrice: -1 };
    }

    if (sort === "days-low") {
      sortOption = { days: 1 };
    }

    if (sort === "days-high") {
      sortOption = { days: -1 };
    }

    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    const [offers, total] = await Promise.all([
      Offer.find(query).sort(sortOption).skip(skip).limit(limitNumber),
      Offer.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      count: offers.length,
      total,
      currentPage: pageNumber,
      totalPages: Math.ceil(total / limitNumber),
      data: offers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch offers",
      error: error.message,
    });
  }
};

// GET /api/offers/signature
const getSignatureOffers = async (req, res) => {
  try {
    const offers = await Offer.find({
      type: "signature",
      isPublished: true,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: offers.length,
      total: offers.length,
      currentPage: 1,
      totalPages: 1,
      data: offers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch signature offers",
      error: error.message,
    });
  }
};

// GET /api/offers/personality
const getPersonalityOffers = async (req, res) => {
  try {
    const offers = await Offer.find({
      type: "personality",
      isPublished: true,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: offers.length,
      total: offers.length,
      currentPage: 1,
      totalPages: 1,
      data: offers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch personality offers",
      error: error.message,
    });
  }
};

// GET /api/offers/:slug
const getOfferBySlug = async (req, res) => {
  try {
    const offer = await Offer.findOne({
      slug: req.params.slug,
      isPublished: true,
    });

    if (!offer) {
      return res.status(404).json({
        success: false,
        message: "Offer not found",
      });
    }

    res.status(200).json({
      success: true,
      data: offer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch offer",
      error: error.message,
    });
  }
};

module.exports = {
  getAllOffers,
  getSignatureOffers,
  getPersonalityOffers,
  getOfferBySlug,
};