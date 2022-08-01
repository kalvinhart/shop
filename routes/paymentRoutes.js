const express = require("express");

const { createIntent, handleWebhook } = require("../features/payments/paymentController");

const router = require("express").Router();

router.post("/create-intent", express.json(), createIntent);
router.post("/webhook", express.raw({ type: "*/*" }), handleWebhook);

module.exports = router;
