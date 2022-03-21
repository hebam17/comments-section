const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// the app
const app = express();

// mongoose connection
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("MongoDB connected!!");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

// middleware
app.use(express.json());

// Routes
app.use("/api/comments", commentRoute);
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
