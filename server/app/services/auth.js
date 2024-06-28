const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const hashedPassword = await argon2.hash(req.body.password, hashingOptions);
    req.body.hashedPassword = hashedPassword;

    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};
const verifyPassword = async (req, res, next) => {
  const isVerified = await argon2.verify(
    req.user.hashedPassword,
    req.body.password
  );
  if (isVerified) {
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  hashingOptions,
};
