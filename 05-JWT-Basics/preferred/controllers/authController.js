// controllers/authController.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (username, password) => {
  return jwt.sign({username, password}, process.env.SECRET, {
    expiresIn: process.env.TOKEN_LIFETIME,
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  const token = generateToken({ username, password });
  res.status(200).json({ token });
};          

module.exports = { login };
