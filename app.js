const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const mainRouter = require("./routes/main");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

//Midelwares
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/", mainRouter);

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
