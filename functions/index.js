const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51KK2q2H0i7873LQ79MlnocAVvSUnniuFfXJCC7CcHVg5RCvs2n2qrcZOOLkNvJ4Q1ONzfZSR5GkGIAcmNvgZsBEA000qlTwwkS");

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({clientSecret: paymentIntent.client_secret});
});

// Listen command
exports.api = functions.https.onRequest(app);
