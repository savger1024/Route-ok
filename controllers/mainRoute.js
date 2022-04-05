const express = require("express");
const {} = require("../controllers/mainController");

const router = express.Router();

router.get("/", getRequest); // amikor csak azt mondjuk, hogy /
router.post("/", postRequest); // amikor csak azt mondjuk, hogy /

module.exports = router;
