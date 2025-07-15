import React from "react";

const modelos = [
  {
    id: "Purificadora",
    nombre: "Purificadora Inicial",
    imagen: "/img/purificadora-basica.png",
    precio: 50000,
    descripcion: "Capacidad 600 garrafones/mes.",
  },
  {
    id: "Vending",
    nombre: "Vending Inicial",
    imagen: "/img/purificadora-intermedia.png",
    precio: 43000,
    descripcion: "1200 garrafones/mes.",
  },
  {
    id: "Vending-Limpieza",
    nombre: "Vending Limpieza",
    imagen: "/img/purificadora-premium.png",
    precio: 23000,
    descripcion: "Automatizada para limpieza.",
  },
];

export default function Step1SelectModel({ onSelect, onNext }) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-800">Selecciona tu modelo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {modelos.map((modelo) => (
          <div
            key={modelo.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => {
              onSelect(modelo);
              onNext();
            }}
          >
            <img src={modelo.imagen} alt={modelo.nombre} className="w-full h-48 object-contain bg-gray-50" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{modelo.nombre}</h3>
              <p className="text-sm text-gray-600">{modelo.descripcion}</p>
              <p className="mt-2 font-semibold text-gray-700">${modelo.precio.toLocaleString()} MXN</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
