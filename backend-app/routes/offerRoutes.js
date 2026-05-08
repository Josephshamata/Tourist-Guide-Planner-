const express = require("express");
const router = express.Router();

const {
  getAllOffers,
  getSignatureOffers,
  getPersonalityOffers,
  getOfferBySlug,
} = require("../controllers/offerController");

router.get("/", getAllOffers);
router.get("/signature", getSignatureOffers);
router.get("/personality", getPersonalityOffers);
router.get("/:slug", getOfferBySlug);

module.exports = router;