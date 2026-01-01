const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

const start = () => {
  try {
    app.listen(PORT, () => console.log(`listening on ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
