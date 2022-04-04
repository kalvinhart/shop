const { createIntent } = require("../controllers/paymentController");

const router = require("express").Router();

router.post("/create-intent", createIntent);

module.exports = router;
