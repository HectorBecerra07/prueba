import React from "react";
import { useCarrito } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";

const CarritoLateral = ({ isOpen, onClose }) => {
  const { carrito, eliminarProducto, vaciarCarrito } = useCarrito();
  const navigate = useNavigate();

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-6 z-50 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Tu Carrito</h2>

      {carrito.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="flex-1 overflow-y-auto space-y-4">
            {carrito.map((p) => (
              <li key={p.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{p.nombre}</p>
                  <p className="text-xs text-gray-500">{p.cantidad} × ${p.precio.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => eliminarProducto(p.id)}
                  className="text-red-500 text-xs"
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </p>

            <button
              onClick={() => {
                navigate("/carrito");
                onClose();
              }}
              disabled={total <= 0}
              className="w-full bg-cyan-400 text-white py-2 rounded-lg mt-4"
            >
              Finalizar pedido
            </button>

            <button
              onClick={vaciarCarrito}
              className="w-full text-red-600 text-xs mt-2"
            >
              Vaciar carrito
            </button>
          </div>
        </>
      )}

      <button onClick={onClose} className="absolute right-4 top-4 text-xl">×</button>
    </div>
  );
};

export default CarritoLateral;
