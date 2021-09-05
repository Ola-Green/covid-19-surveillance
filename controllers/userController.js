const User = require("../models/user");

const userController = {
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select("-password");
      if (!user) return res.status(400).json({ msg: "user does not exist" });

      res.json({ user });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find().select("-password");

      res.json(users);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateUser: async (req, res) => {
    const { fullName, avatar, mobile, address, gender, town } = req.body;

    try {
      await User.findOneAndUpdate(
        { _id: req.user._id },
        {
          fullName,
          avatar,
          mobile,
          address,
          gender,
          town,
        }
      );

      res.json({ msg: "update succeeded" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateUserRole: async (req, res) => {
    try {
      const { role } = req.body;

      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { role }
      );

      res.json({ msg: "Update Succeeded" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userController;
