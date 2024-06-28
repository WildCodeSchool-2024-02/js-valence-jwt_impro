const tables = require("../../database/tables");

const login = (req, res) => {
  res.json({ token: "oui oui, va y entre" });
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
