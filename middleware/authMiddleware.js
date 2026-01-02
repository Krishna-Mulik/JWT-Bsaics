const { verify } = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers?.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("No token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    const { username, id } = decoded.username;
    req.user = { username, id };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized");
  }
};

module.exports = authMiddleware;
