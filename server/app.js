const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const commentRoute = require("./routes/comments");
const userRoute = require("./routes/users");
const cors = require("cors");
// the app
const app = express();
app.use(cors());
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
app.use("/api/users", userRoute);
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
