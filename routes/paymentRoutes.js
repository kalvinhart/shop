const express = require("express");

const { createIntent, handleWebhook } = require("../features/payments/paymentController");
const { catchAsync } = require("../middleware/errors");

const router = require("express").Router();

// Create Payment Intent - POST - api/payment/create-intent
router.post(
  "/create-intent",
  express.json(),
  catchAsync(async (req, res, next) => {
    const { items, user } = req.body;
    const { clientSecret, total } = await createIntent(items, user);
    res.status(200).json({ clientSecret, total });
  })
);

// Handle Webhook - POST - api/payment/webhook
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  catchAsync(async (req, res, next) => {
    const event = req.body;
    const signature = req.headers["stripe-signature"];
    await handleWebhook(event, signature);
    res.status(200).end();
  })
);

module.exports = router;
