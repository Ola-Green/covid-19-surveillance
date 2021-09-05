const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 25,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 25,
    },

    address: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
      default: "male",
    },

    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/deviga-hub/image/upload/v1615513712/default_user2_obdbty.jpg",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    email: {
      type: String,
      required: true,
      trim: true,
      maxLength: 25,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    town: {
      type: String,
      required: true,
    },

    age: {
      type: String,
      required: true,
    },

    occupation: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

const userModel = mongoose.model("user", schema);

module.exports = userModel;
