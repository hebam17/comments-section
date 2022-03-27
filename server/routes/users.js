const userRoute = require("express").Router();

const { createUser, getUser } = require("../controllers/userController");

// create user
userRoute.post("/", createUser);

// get a user
userRoute.get("/:username", getUser);

module.exports = userRoute;
