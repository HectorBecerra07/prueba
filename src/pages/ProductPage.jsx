import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const productos = [
  {
    id: "1",
    nombre: "Producto Ejemplo",
    descripcion: "Descripción detallada del producto.",
    imagen: "/img/productos/ejemplo.jpg",
    precio: 199,
  },
  {
    id: "2",
    nombre: "Purificadora Básica",
    descripcion: "Equipo ideal para comenzar tu propio negocio de agua purificada.",
    imagen: "/img/productos/purificadora-basica.jpg",
    precio: 54950,
  },
  {
    id: "3",
    nombre: "Máquina Vending",
    descripcion: "Máquina automática para dispensar garrafones, ideal para negocios 24/7.",
    imagen: "/img/productos/vending.jpg",
    precio: 79900,
  },
];

export default function ProductPage({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return <div className="text-center py-20">Producto no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full grid md:grid-cols-2 overflow-hidden">
        <div className="h-80 md:h-auto">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-bold text-gray-900">{producto.nombre}</h1>
          <p className="text-gray-700">{producto.descripcion}</p>
          <p className="text-2xl font-semibold text-gray-900">${producto.precio.toFixed(2)}</p>

          <button
            onClick={() => {
              onAddToCart(producto);
              navigate("/carrito");
            }}
            className="bg-[#ccff00] hover:brightness-90 text-black px-6 py-3 rounded-xl font-semibold"
          >
            Añadir al carrito
          </button>

          <button
            onClick={() => navigate("/productos")}
            className="text-blue-600 hover:underline mt-4"
          >
            Volver a productos
          </button>
        </div>
      </div>
    </div>
  );
}

