const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/userController");

const { verifyToken, logout } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);

// Protected route example - add this to any route that needs authentication
router.get("/profile", verifyToken, (req, res) => {
  res.status(200).json({
    message: "User profile fetched",
    user: req.user,
  });
});

module.exports = router;