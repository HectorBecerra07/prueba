import React from "react";
import { useCarrito } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";

const CarritoLateral = ({ isOpen, onClose }) => {
  const {
    carrito,
    eliminarProducto,
    vaciarCarrito,
    incrementarCantidad,
    decrementarCantidad,
  } = useCarrito();
  const navigate = useNavigate();

  const total = carrito.reduce(
    (acc, p) => acc + (Number(p.precio || 0) * p.cantidad),
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-2xl p-6 z-50 flex flex-col border-l">
      <h2 className="text-xl font-bold mb-4 text-gray-800">🛒 Tu Carrito</h2>

      {carrito.length === 0 ? (
        <p className="text-gray-500 text-sm">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="flex-1 overflow-y-auto divide-y divide-gray-200">
            {carrito.map((p) => (
              <li key={p.id} className="flex justify-between items-center py-4">
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-gray-800">{p.nombre}</p>
                  <p className="text-xs text-gray-500">
                    {p.cantidad} × ${Number(p.precio || 0).toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => decrementarCantidad(p.id)}
                      className="text-gray-600 border rounded px-2 py-0.5 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{p.cantidad}</span>
                    <button
                      type="button"
                      onClick={() => incrementarCantidad(p.id)}
                      className="text-gray-600 border rounded px-2 py-0.5 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => eliminarProducto(p.id)}
                  className="text-red-500 text-xs hover:underline"
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 space-y-4">
            <p className="flex justify-between font-bold text-gray-700 text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </p>

            <button
              type="button"
              onClick={() => {
                navigate("/carrito");
                onClose();
              }}
              disabled={total <= 0}
              className="w-full py-2 rounded-lg font-semibold text-black transition"
              style={{
                backgroundColor: "#ccff00",
              }}
            >
              Finalizar pedido
            </button>

            <button
              type="button"
              onClick={vaciarCarrito}
              className="w-full text-red-600 text-xs hover:underline"
            >
              Vaciar carrito
            </button>
          </div>
        </>
      )}

      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar carrito"
        className="absolute right-4 top-4 text-xl text-gray-500 hover:text-black"
      >
        ×
      </button>
    </div>
  );
};

export default CarritoLateral;
