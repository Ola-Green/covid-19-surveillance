const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    fever: {
      type: String,
      required: true,
    },
    cough: {
      type: String,
      required: true,
    },
    soreThroat: {
      type: String,
      required: true,
    },
    nauseaVomit: {
      type: String,
      required: true,
    },
    diarrhoea: {
      type: String,
      required: true,
    },
    headache: {
      type: String,
      required: true,
    },

    convulsion: {
      type: String,
      required: true,
    },
    bleedingDisorder: {
      type: String,
      required: true,
    },

    rash: {
      type: String,
      required: true,
    },

    disorderConsciousness: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("survey", schema);
