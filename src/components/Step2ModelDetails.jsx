import { useState } from "react";

const caracteristicasPorModelo = {
  Atlantis: ["600 garrafones por mes", "Filtrado por carbón activado", "Sistema UV incluido", "Bajo consumo energético"],
  AtlantisMax: ["800 garrafones por mes", "Ósmosis inversa premium", "Filtro doble carbón + UV", "Construcción acero inoxidable"],
  Megalodon: ["Agua alcalina certificada", "Capacidad 1000 garrafones/mes", "Sistema mineralizador de 7 etapas", "Alta eficiencia energética"],
  MegalodonMax: ["Máxima capacidad 1200 garrafones", "Mineralización + alcalinización premium", "Controlador inteligente", "Sistema reforzado UV y Ozono"],
};

export default function Step2ModelDetails({ modelo, vendingType, onNext }) {
  const [isTouch, setIsTouch] = useState(false);
  const precioBase = modelo.precio;

  // Siempre +3000 si es "Touch". Si es "Tradicional" solo suma si el checkbox está activo.
  const touchIncrement = vendingType === "Touch" ? 3000 : isTouch ? 3000 : 0;
  const precioFinal = precioBase + touchIncrement;

  const caracteristicas = caracteristicasPorModelo[modelo.id] || [];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Detalles de tu modelo seleccionado
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          {modelo.imagen ? (
            <img
              src={modelo.imagen}
              alt={modelo.nombre}
              className="w-full rounded-xl shadow object-contain max-h-[400px] mx-auto"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              Imagen no disponible
            </div>
          )}
        </div>

        <div className="space-y-6 text-gray-700">
          <h3 className="text-2xl font-semibold">{modelo.nombre}</h3>
          <p>{modelo.descripcion}</p>

          {caracteristicas.length > 0 && (
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {caracteristicas.map((caracteristica, idx) => (
                <li key={idx}>{caracteristica}</li>
              ))}
            </ul>
          )}

          {vendingType === "Tradicional" && (
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="touch"
                checked={isTouch}
                onChange={() => setIsTouch(!isTouch)}
                className="w-5 h-5 accent-black"
              />
              <label htmlFor="touch" className="text-sm font-medium text-gray-800">
                Hacer la máquina Touch (+$3,000 MXN)
              </label>
            </div>
          )}

          <p className="mt-2 font-bold text-xl">
            Desde ${precioFinal.toLocaleString()} MXN
          </p>

          <button
            onClick={() => onNext(touchIncrement)}
            className="bg-black text-white rounded-lg px-6 py-3 hover:opacity-90"
          >
            Siguiente: Personaliza tu equipo
          </button>
        </div>
      </div>
    </div>
  );
}
