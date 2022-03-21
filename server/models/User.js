const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    min: 3,
    max: 7,
    required: [true, "This is required!"],
    unique: true,
  },
  password: {
    type: String,
    min: 5,
    required: [true, "Password is required!"],
  },
  image: {
    data: Buffer,
    contentType: String,
    default: "images/avatar.jpg",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
