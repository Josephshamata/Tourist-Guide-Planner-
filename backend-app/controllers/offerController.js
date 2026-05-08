const Offer = require("../models/offers");

// GET /api/offers
// Supports: ?type=signature&category=luxury&search=beirut&limit=8&page=1
const getAllOffers = async (req, res) => {
  try {
    const {
      type,
      category,
      search,
      sort = "recommended",
      page = 1,
      limit = 8,
    } = req.query;

    const query = {
      isPublished: true,
    };

    if (type && type !== "all") {
      query.type = type;
    }

    if (category && category !== "all") {
      query.categories = {
        $in: [category.toLowerCase()],
      };
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { mainPlaces: { $regex: search, $options: "i" } },
        { categories: { $regex: search, $options: "i" } },
        { hotelName: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
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

    const skip = (Number(page) - 1) * Number(limit);

    const [offers, total] = await Promise.all([
      Offer.find(query)
        .sort(sortOption)
        .skip(skip)
        .limit(Number(limit)),
      Offer.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      count: offers.length,
      total,
      currentPage: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
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