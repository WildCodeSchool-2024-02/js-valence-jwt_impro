const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const login = (req, res) => {
  const payload = {
    sub: req.user.id,
  };

  const token = jwt.sign(payload, process.env.APP_SECRET, { expiresIn: "1h" });
  res.json({ token });
};

const getUserWithPassword = async (req, res, next) => {
  const user = await tables.user.findUserWithPassword(req.body.email);
  if (!user) {
    res.sendStatus(401);
  }
  req.user = user;
  next();
};

module.exports = {
  login,
  getUserWithPassword,
};
