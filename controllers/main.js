const { sign, decode, verify } = require("jsonwebtoken");
const { BadRequestRequest } = require("../errors");

const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestRequest("Invalid User Name or Password");
  }
  const id = new Date().getDate();

  const token = sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "login sucess", token });
};

const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  return res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized lucky number, ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
