const Survey = require("../models/survey");

class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;

    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

const surveyController = {
  makeSurvey: async (req, res) => {
    try {
      const {
        headache,
        convulsion,
        cough,
        nauseaVomit,
        diarrhoea,
        disorderConsciousness,
        rash,
        bleedingDisorder,
        soreThroat,
        fever,
      } = req.body;

      const newSurvey = new Survey({
        headache,
        convulsion,
        cough,
        nauseaVomit,
        diarrhoea,
        disorderConsciousness,
        rash,
        bleedingDisorder,
        soreThroat,
        fever,
        user: req.user._id,
      });
      await newSurvey.save();

      res.json({
        msg: "Your answers have been submitted!",
        newSurvey: {
          ...newSurvey._doc,
          user: req.user,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUserSurvey: async (req, res) => {
    try {
      const features = new ApiFeatures(
        Survey.find({ user: req.params.id }),
        req.query
      ).paginating();
      const surveys = await features.query.sort("-createdAt");

      res.json({
        surveys,
        result: surveys.length,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = surveyController;
