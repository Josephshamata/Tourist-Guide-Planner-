const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const offerRoutes = require("./routes/offerRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.use("/api/events", eventRoutes);
app.use("/api/offers", offerRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});