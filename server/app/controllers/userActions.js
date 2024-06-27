const tables = require("../../database/tables");

const add = async (req, res, next) => {
  const user = req.body;
  try {
    const insertId = await tables.user.create(user);
    if (!insertId) {
      throw new Error("Could not create user");
    }
    res.status(201).json({ id: insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
};
