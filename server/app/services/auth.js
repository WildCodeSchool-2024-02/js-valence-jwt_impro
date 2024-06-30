const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

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

const verifyToken = (req, res, next) => {
  try {
    const authorization = req.get("Authorization");
    if (!authorization) {
      throw new Error("Authorization is missing");
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization should be of type Bearer");
    }

    req.payload = jwt.verify(token, process.env.APP_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
  hashingOptions,
};
