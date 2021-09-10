require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const cookierParser = require("cookie-parser");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const surveyRoutes = require("./routes/survey");

const app = express();

app.use(express.json());
app.use(cookierParser());
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api", surveyRoutes);

const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI)
  .then(() => console.log("Database connection established"))
  .catch((err) => console.log(err.reason));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`You are listening to port ${PORT}`));
