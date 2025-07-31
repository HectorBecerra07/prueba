import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

export default function PurificadoresCaseros() {
  const [purificadores, setPurificadores] = useState([]);
  const navigate = useNavigate();
  const { agregarProducto } = useCarrito();

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    const filtrados = productosGuardados.filter(
      (p) => p.categoria?.toLowerCase().includes("purificador")
    );
    setPurificadores(filtrados);
  }, []);

  const handleAgregar = (producto) => {
    const productoConCantidad = { ...producto, cantidad: 1 };
    agregarProducto(productoConCantidad);
  };

  return (
    <section className="px-6 md:px-16 py-16 min-h-screen bg-white text-gray-800">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-black">
        Purificadores Caseros
      </h2>

      {purificadores.length === 0 ? (
        <p className="text-center text-gray-500">
          No hay purificadores disponibles en este momento.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {purificadores.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition hover:scale-[1.02]"
            >
              <img
                src={item.imagen || "/placeholder.jpg"}
                alt={item.nombre}
                className="w-full h-48 object-cover rounded-2xl mb-4 shadow-sm"
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                {item.nombre}
              </h3>
              <p className="text-sm text-gray-700 mb-3">{item.descripcion}</p>
              <p className="text-lg font-bold text-green-600 mb-4">
                ${item.precio}
              </p>

              <button
                onClick={() => handleAgregar(item)}
                className="mb-2 px-6 py-2 rounded-xl font-semibold bg-[#ccff00] text-black hover:brightness-90 transition"
              >
                Agregar al carrito
              </button>

              <button
                onClick={() => navigate(`/videos/${item.id}`)}
                className="text-blue-700 hover:underline text-sm font-medium"
              >
                Ver video y detalles
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-16 text-center">
        <button
          onClick={() => navigate("/videos")}
          className="bg-[#ccff00] hover:brightness-90 text-black px-8 py-3 rounded-xl font-semibold shadow-lg"
        >
          Ver todos los videos
        </button>
      </div>
    </section>
  );
}
