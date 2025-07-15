import { useState } from "react";

const extras = [
  { id: "tinaco-2500", nombre: "Tinaco 2500L", descripcion: "Para agua purificada" },
  { id: "tinaco-5000", nombre: "Tinaco 5000L", descripcion: "Para agua cruda" },
  { id: "permisos", nombre: "Permisos y Trámites", descripcion: "Requisitos legales incluidos" },
  { id: "kit", nombre: "Kit de Insumos Anual", descripcion: "Todo lo necesario para operar el año" },
  { id: "mantenimiento", nombre: "Plan de Mantenimiento", descripcion: "Servicio anual preventivo" },
  { id: "logotipo", nombre: "Diseño de Logotipo", descripcion: "Diseño profesional de marca" },
];

export default function Configurator({ modelo }) {
  const [seleccionados, setSeleccionados] = useState([]);

  const toggleExtra = (id) => {
    setSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold text-gray-800">Personaliza tu {modelo.nombre}</h2>

      <div className="space-y-4">
        <h3 className="text-xl font-medium text-gray-700">Extras recomendados</h3>
        <ul className="space-y-3">
          {extras.map((extra) => (
            <li
              key={extra.id}
              className={`border rounded-lg p-4 cursor-pointer transition ${
                seleccionados.includes(extra.id)
                  ? "border-gray-900 bg-gray-50"
                  : "border-gray-300 hover:border-gray-500"
              }`}
              onClick={() => toggleExtra(extra.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">{extra.nombre}</p>
                  <p className="text-gray-500 text-sm">{extra.descripcion}</p>
                </div>
                <input
                  type="checkbox"
                  checked={seleccionados.includes(extra.id)}
                  readOnly
                  className="w-5 h-5 accent-black"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between gap-4">
        <button
          className="w-full py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition"
          onClick={() => window.history.back()}
        >
          Regresar
        </button>
        <button className="w-full py-3 rounded-lg bg-black text-white hover:opacity-90 transition">
          Continuar
        </button>
      </div>
    </div>
  );
}
