const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const offerRoutes = require("./routes/offerRoutes");

const itineraryRoutes = require("./routes/itineraryRoutes");

const session = require("express-session");
const passport = require("passport");
require("./config/passport");

const app = express();

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true, // Allow cookies
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "googleauthsecret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/api", authRoutes);

app.use("/api/events", eventRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/itineraries", itineraryRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
