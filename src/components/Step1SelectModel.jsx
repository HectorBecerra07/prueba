import React from "react";

export default function Step1SelectModel({ modelos, vendingType, onSelect, onNext }) {
  // Filtrar según el tipo seleccionado
  const modelosFiltrados = modelos.filter((item) => {
    const esTouch = item.id.toLowerCase().includes("touch");
    return vendingType === "Touch" ? esTouch : !esTouch;
  });

  const handleClick = (modelo) => {
    onSelect(modelo);
    onNext();
  };

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        Elige tu modelo {vendingType === "Touch" ? "Touch" : "Tradicional"}
      </h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {modelosFiltrados.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-6 hover:border-[#24d4da] hover:shadow-lg transition cursor-pointer"
            onClick={() => handleClick(item)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{item.nombre}</h3>
                <p className="text-gray-500 text-sm">{item.descripcion}</p>
              </div>
              <p className="text-lg font-bold text-gray-900">
                ${item.precio.toLocaleString()} MXN
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
