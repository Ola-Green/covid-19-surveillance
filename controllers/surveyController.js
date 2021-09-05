const Survey = require("../models/survey");

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
        survey: {
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
      const survey = Survey.find({ user: req.params.id });
      res.json({
        survey,
        result: survey.length,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = surveyController;
