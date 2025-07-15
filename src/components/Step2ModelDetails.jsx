import React from "react";

export default function Step2ModelDetails({ modelo, onNext }) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Detalles de tu modelo seleccionado</h2>
      <img src={modelo.imagen} alt={modelo.nombre} className="w-full rounded-xl shadow" />
      <div className="text-gray-700">
        <h3 className="text-2xl font-semibold">{modelo.nombre}</h3>
        <p className="mt-2">{modelo.descripcion}</p>
        <p className="mt-4 font-bold text-xl">Desde ${modelo.precio.toLocaleString()} MXN</p>
      </div>
      <button
        onClick={onNext}
        className="bg-black text-white rounded-lg px-6 py-3 hover:opacity-90"
      >
        Siguiente: Personaliza tu equipo
      </button>
    </div>
  );
}
