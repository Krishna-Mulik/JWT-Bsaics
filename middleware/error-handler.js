const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).send(err.message);
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("internal server error", err);
};

module.exports = errorHandler;
