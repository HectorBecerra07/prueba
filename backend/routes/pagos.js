import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

// Crear sesión de pago
router.post("/crear-sesion", async (req, res) => {
  const { productos } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: productos.map((p) => ({
        price_data: {
          currency: "mxn",
          product_data: {
            name: p.nombre,
          },
          unit_amount: parseInt(p.precio) * 100,
        },
        quantity: 1,
      })),
      success_url: "https://tusitio.com/success",
      cancel_url: "https://tusitio.com/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "No se pudo crear la sesión de pago." });
  }
});

export default router;
