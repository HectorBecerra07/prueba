import React from "react";
import { useCarrito } from "../context/CarritoContext";

const Carrito = () => {
  const { carrito, eliminarProducto, vaciarCarrito } = useCarrito();

  const total = carrito.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0
  );

  const generarPedido = () => {
    console.log("🧾 Pedido generado:", carrito);
    alert("Pedido generado correctamente 🎉");
    vaciarCarrito();
  };

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">🛒 Tu Carrito</h2>

        {carrito.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">El carrito está vacío.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lista de productos */}
            <div className="md:col-span-2 space-y-6">
              {carrito.map((p) => (
                <div
                  key={p.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row items-center p-4 gap-6"
                >
                  <img
                    src={p.imagen || "/img/placeholder-product.png"}
                    alt={p.nombre}
                    className="w-24 h-24 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{p.nombre}</h3>
                    <p className="text-sm text-gray-500">Cantidad: {p.cantidad}</p>
                    <p className="text-sm text-gray-500">
                      Precio unitario: ${p.precio.toFixed(2)}
                    </p>
                    <p className="text-sm font-bold text-gray-700 mt-1">
                      Subtotal: ${(p.precio * p.cantidad).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => eliminarProducto(p.id)}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </div>

            {/* Resumen */}
            <div className="bg-white shadow-lg rounded-lg p-6 h-fit">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Resumen</h4>
              <div className="flex justify-between mb-2 text-sm text-gray-700">
                <span>Artículos:</span>
                <span>{carrito.reduce((acc, p) => acc + p.cantidad, 0)}</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-800 text-lg mb-4">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={generarPedido}
                className="w-full bg-[#24d4da] hover:bg-[#1bb9bd] text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Finalizar compra
              </button>
              <button
                onClick={vaciarCarrito}
                className="w-full text-red-600 mt-4 hover:underline text-sm"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Carrito;
