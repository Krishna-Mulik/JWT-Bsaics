const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("./public"));

app.use(notFound);
app.use(errorHandler);

const start = () => {
  try {
    app.listen(PORT, () => console.log(`listening on ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
