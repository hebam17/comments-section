const mongoose = require("mongoose");

const LoggingSchema = new mongoose.Schema({
  user: {
    type: String,
    min: 3,
    max: 7,
    required: [true, "This is required!"],
  },
  login: { type: Boolean, default: false },
});

const Logging = mongoose.model("Logging", LoggingSchema);
module.exports = Logging;
