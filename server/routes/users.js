const userRoute = require("express").Router();

const {
  createUser,
  getUser,
  getUserById,
} = require("../controllers/userController");

// create user
userRoute.post("/", createUser);

// get a user
userRoute.get("/:username", getUser);

// get a user by id
userRoute.get("/user/:userId", getUserById);

module.exports = userRoute;
