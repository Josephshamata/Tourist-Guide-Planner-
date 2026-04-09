const express = require("express");
const router = express.Router();

const {
  getAllOffers,
  getSignatureOffers,
  getPersonalityOffers,
} = require("../controllers/offerController");

router.get("/", getAllOffers);
router.get("/signature", getSignatureOffers);
router.get("/personality", getPersonalityOffers);

module.exports = router;