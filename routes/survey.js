const router = require("express").Router();
const surveyController = require("../controllers/surveyController");
const auth = require("../middlewares/auth");

router.post("/makesurvey", auth, surveyController.makeSurvey);
router.get("/user_survey/:id", auth, surveyController.getUserSurvey);

module.exports = router;
