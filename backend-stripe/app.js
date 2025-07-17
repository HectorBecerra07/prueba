const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();
const stripe = new Stripe("TU_CLAVE_SECRETA_DE_STRIPE"); // 🔴 Aquí tu SECRET KEY, no la pública

app.use(cors());
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "mxn",
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error en Stripe:", error.message);
    res.status(500).send({ error: error.message });
  }
});

app.listen(4000, () => {
  console.log("✅ Backend de Stripe corriendo en http://localhost:4000");
});
