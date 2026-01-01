const { CustomAPIError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).send(err.message);
  }

  return res.status(500).send("internal server error");
};

module.exports = errorHandler;
