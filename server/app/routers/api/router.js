const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const authController = require("../../controllers/authActions");
const userController = require("../../controllers/userActions");
const itemsController = require("../../controllers/itemActions");

const { hashPassword, verifyPassword } = require("../../services/auth");

router.use("/items", itemsController.browse);
router.post("/users", hashPassword, userController.add);
router.post(
  "/login",
  authController.getUserWithPassword,
  verifyPassword,
  authController.login
);

/* ************************************************************************* */

module.exports = router;
