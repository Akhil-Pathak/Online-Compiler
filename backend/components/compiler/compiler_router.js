const express = require("express");
const router = express.Router();
const { runCode, getStatus } = require("./compiler_controller");

router.post("/run", runCode);
router.get("/status", getStatus);

module.exports = router;
