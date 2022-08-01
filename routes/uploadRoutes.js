const express = require("express");
const router = express.Router();

const { uploadFile } = require("../features/uploads/uploadController");
const { generateUploadUrl } = require("../middleware/s3");

router.post("/s3url", generateUploadUrl);
router.post("/", uploadFile);

module.exports = router;
