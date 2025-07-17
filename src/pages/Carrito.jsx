import React from "react";
import { useCarrito } from "../context/CarritoContext";
import CheckoutForm from "../components/CheckoutForm";

const Carrito = () => {
  const { carrito } = useCarrito();
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🛒 Tu Carrito</h2>

        {carrito.length === 0 ? (
          <p className="text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {carrito.map((p) => (
                <li key={p.id} className="border-b pb-4 flex justify-between items-center">
                  <div>
                    {p.nombre} x {p.cantidad} = ${(p.precio * p.cantidad).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-xl font-bold mt-4">Total: ${total.toFixed(2)} MXN</p>

            <CheckoutForm amount={Math.round(total * 100)} />
          </>
        )}
      </div>
    </section>
  );
};

export default Carrito;
