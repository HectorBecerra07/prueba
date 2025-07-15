import React from "react";

export default function Step4Summary({ modelo, extras }) {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Resumen de tu Configuración</h2>

      <div className="p-6 border rounded-xl space-y-3">
        <h3 className="font-semibold text-xl">Modelo Seleccionado</h3>
        <p>{modelo.nombre} — ${modelo.precio.toLocaleString()} MXN</p>
      </div>

      <div className="p-6 border rounded-xl space-y-3">
        <h3 className="font-semibold text-xl">Extras Seleccionados</h3>
        {extras.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1">
            {extras.map((extra) => (
              <li key={extra}>{extra}</li>
            ))}
          </ul>
        ) : (
          <p>No seleccionaste extras.</p>
        )}
      </div>

      <button className="bg-black text-white rounded-lg px-6 py-3 hover:opacity-90">
        Finalizar Cotización
      </button>
    </div>
  );
}
