const express = require("express");
const router = express.Router();

const { uploadFile } = require("../controllers/uploadController");

router.post("/", uploadFile);

module.exports = router;
