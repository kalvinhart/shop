const express = require("express");
const router = express.Router();

const { catchAsync } = require("../middleware/errors");
const { getUrl } = require("../features/uploads/uploadController");

router.post(
  "/s3url",
  catchAsync(async (req, res, next) => {
    const { id, name } = req.body;
    const response = await getUrl(id, name);
    res.status(200).json({ url: response });
  })
);

module.exports = router;
