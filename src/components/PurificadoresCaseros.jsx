import React from "react";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

const purificadores = [
  {
    id: "purificador-eco",
    nombre: "Purificador Compacto Eco",
    imagen: "/imgs/purificador1.jpg",
    descripcion: "Ideal para departamentos pequeños. Bajo consumo eléctrico.",
    precio: 1899,
  },
  {
    id: "purificador-plus",
    nombre: "Purificador Familiar Plus",
    imagen: "/imgs/purificador2.jpg",
    descripcion: "Perfecto para familias. Incluye triple filtración.",
    precio: 2799,
  },
  {
    id: "purificador-premium",
    nombre: "Purificador Premium UV",
    imagen: "/imgs/purificador3.jpg",
    descripcion: "Elimina bacterias con luz UV. Tecnología avanzada.",
    precio: 3599,
  },
];

export default function PurificadoresCaseros() {
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();

  const handleAgregar = (producto) => {
    const productoConCantidad = { ...producto, cantidad: 1 };
    agregarAlCarrito(productoConCantidad);
  };

  return (
    <section className="px-6 md:px-16 py-16 min-h-screen bg-white text-gray-800">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-blue-900">
        Purificadores Caseros
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {purificadores.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition hover:scale-[1.02]"
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              className="w-full h-48 object-cover rounded-2xl mb-4 shadow-sm"
            />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.nombre}</h3>
            <p className="text-sm text-gray-700 mb-3">{item.descripcion}</p>
            <p className="text-lg font-bold text-green-600 mb-4">${item.precio}</p>

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
