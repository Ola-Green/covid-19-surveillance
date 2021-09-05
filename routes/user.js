const router = require("express").Router();
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");
const userController = require("../controllers/userController");

router.get("/user/:id", auth, userController.getUser);
router.get("/getusers", auth, admin, userController.getUsers);
router.patch("/updateuser", auth, userController.updateUser);
router.patch("/update_role/:id", auth, admin, userController.updateUserRole);

module.exports = router;
