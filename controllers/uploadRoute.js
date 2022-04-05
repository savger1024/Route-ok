const express = require("express");
const { getRequest, postRequest } = require("../controllers/uploadController");

const router = express.Router();

router.get("/", getRequest); // amikor csak azt mondjuk, hogy /
router.post("/", postRequest); // amikor csak azt mondjuk, hogy /

module.exports = router;
