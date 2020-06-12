const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB Setup
const mongoUri = `mongodb+srv://Admin:passwordpassword@cluster0-ab6cb.mongodb.net/<dbname>?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});

mongoose.connection.on("error", () => {
  console.error("Error connecting to the database", err);
});

// Routes

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Server Ready");
});
