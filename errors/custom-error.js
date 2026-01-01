class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = statusCode;
  }
}

const createCustomErr = (message, statusCode) =>
  new CustomAPIError(message, statusCode);

module.exports = { CustomAPIError, createCustomErr };
