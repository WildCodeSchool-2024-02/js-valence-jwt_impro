const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const usersRouter = require("./users/router");
const authController = require("../../controllers/authActions");

router.use("/items", itemsRouter);
router.use("/users", usersRouter);
router.post("/login", authController.login);

/* ************************************************************************* */

module.exports = router;
