const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/userActions");

router.post("/", add);

module.exports = router;
