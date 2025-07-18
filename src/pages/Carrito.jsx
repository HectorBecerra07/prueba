import React from "react";
import { useCarrito } from "../context/CarritoContext";
import CheckoutForm from "../components/CheckoutForm";

const Carrito = () => {
  const { carrito } = useCarrito();
  const total = carrito.reduce(
    (acc, p) => acc + (Number(p.precio || 0) * p.cantidad),
    0
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 pt-32">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 space-y-10">
        <h2 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
          <svg
            className="w-7 h-7 text-cyan-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9M9 21h6"
            />
          </svg>
          Tu Carrito
        </h2>

        {carrito.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">
            Tu carrito está vacío.
          </p>
        ) : (
          <>
            <div className="bg-gray-50 rounded-xl shadow-inner divide-y divide-gray-200">
              {carrito.map((p) => (
                <div
                  key={p.id}
                  className="flex justify-between items-center px-6 py-4 hover:bg-gray-100 transition"
                >
                  <div>
                    <p className="font-medium text-gray-800">{p.nombre}</p>
                    <p className="text-sm text-gray-500">
                      Cantidad: {p.cantidad}
                    </p>
                  </div>
                  <div className="font-semibold text-gray-700">
                    ${(p.precio * p.cantidad).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 text-right">
              <p className="text-xl font-extrabold text-gray-700">
                Total: <span className="text-cyan-600">${total.toFixed(2)} MXN</span>
              </p>
            </div>

            <CheckoutForm amount={Math.round(total * 100)} cartItems={carrito} />
          </>
        )}
      </div>
    </section>
  );
};

export default Carrito;
