const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const authController = require("../../controllers/authActions");
const userController = require("../../controllers/userActions");
const itemsController = require("../../controllers/itemActions");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("../../services/auth");

router.post("/users", hashPassword, userController.add);
router.post(
  "/login",
  authController.getUserWithPassword,
  verifyPassword,
  authController.login
);
router.get("/items", verifyToken, itemsController.browse);

/* ************************************************************************* */

module.exports = router;
