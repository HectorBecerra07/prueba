import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      alert("Pago exitoso 🎉");
    }
  };

  if (!clientSecret) return <p className="mt-6">Cargando...</p>;

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <CardElement className="p-4 border rounded" />
      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Pagar ahora
      </button>
    </form>
  );
};

export default CheckoutForm;
