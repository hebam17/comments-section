const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create({ ...req.body });
    console.log("the new user:", newUser);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json("Sorry something wrong happend!");
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json("This user does not exists!");
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    console.log("user:", user);
    console.log("userId:", req.params.userId);

    res.status(200).json(user);
  } catch (err) {
    res.status(404).json("This user does not exists!");
  }
};
