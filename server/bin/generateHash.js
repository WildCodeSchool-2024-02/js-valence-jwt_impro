const argon2 = require("argon2");
const { hashingOptions } = require("../app/services/auth");

const genHash = async () => {
  const hash = await argon2.hash("pass", hashingOptions);
  console.info(hash);
};
genHash();
