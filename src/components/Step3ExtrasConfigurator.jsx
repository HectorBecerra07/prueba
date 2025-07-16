import React, { useState } from "react";

const extrasPorMaquina = {
  Purificadora1: [
    { id: "tinaco-2500", nombre: "4 Tinacos 2500L", descripcion: "Para almacenamiento", precio: 10500 },
    { id: "tinaco-5000", nombre: "2 Tinacos 5000L", descripcion: "Para almacenamiento", precio: 20000 },
    { id: "Tramites", nombre: "Permisos, Trámites y Requerimientos", descripcion: "Requisitos legales y tramites", precio: 15000 },
    { id: "Kit", nombre: "Insumos anuales", descripcion: "Kit de insumos anuales", precio: 2500 },
    { id: "Plan", nombre: "Plan de mantenimiento ", descripcion: "Plan de mantenimiento anual", precio: 4500 },
    { id: "Volantes-tarjetas", nombre: "Volantes publicitarios y Tarjetas publicitarias", descripcion: "Diseño y creación de volantes publicitarios y Tarjetas", precio: 1500 },
  ],
  Purificadora2: [
    { id: "tinaco-2500", nombre: "Tinacos 2500L", descripcion: "Para almacenamiento", precio: 5000 },
    { id: "tinaco-5000", nombre: "Tinacos 5000L", descripcion: "Para almacenamiento", precio: 8000 },
    { id: "Tramites", nombre: "Permisos, Trámites y Requerimientos", descripcion: "Requisitos legales y tramites", precio: 15000 },
    { id: "Automatizacion", nombre: "Automatizacion de osmosis inversa para producto terminado", descripcion: "Automatizacion", precio: 12000 },
    { id: "Kit", nombre: "Insumos anuales", descripcion: "Kit de insumos anuales", precio: 2500 },
    { id: "Plan", nombre: "Plan de mantenimiento ", descripcion: "Plan de mantenimiento anual", precio: 4500 },
  ],
  Purificadora3: [
    { id: "tinaco-2500", nombre: "Tinacos 2500L", descripcion: "Para almacenamiento", precio: 5000 },
    { id: "tinaco-5000", nombre: "Tinacos 5000L", descripcion: "Para almacenamiento", precio: 8000 },
    { id: "Tramites", nombre: "Permisos, Trámites y Requerimientos", descripcion: "Requisitos legales y tramites", precio: 15000 },
    { id: "Kit", nombre: "Insumos anuales", descripcion: "Kit de insumos anuales", precio: 2500 },
    { id: "Plan", nombre: "Plan de mantenimiento ", descripcion: "Plan de mantenimiento anual", precio: 4500 },
  ],
  Purificadora4: [
    { id: "tinaco-2500", nombre: "Tinacos 2500L", descripcion: "Para almacenamiento", precio: 5000 },
    { id: "tinaco-5000", nombre: "Tinacos 5000L", descripcion: "Para almacenamiento", precio: 8000 },
    { id: "Tramites", nombre: "Permisos, Trámites y Requerimientos", descripcion: "Requisitos legales y tramites", precio: 15000 },
    { id: "Automatizacion", nombre: "Automatizacion de osmosis inversa para producto terminado", descripcion: "Automatizacion", precio: 12000 },
    { id: "Kit", nombre: "Insumos anuales", descripcion: "Kit de insumos anuales", precio: 2500 },
    { id: "Plan", nombre: "Plan de mantenimiento ", descripcion: "Plan de mantenimiento anual", precio: 4500 },
  ],
  Atlantis: [
    { id: "tinaco-2500", nombre: "Tinaco 2500L", descripcion: "Para almacenamiento", precio: 5000 },
    { id: "tinaco-5000", nombre: "Tinaco 5000L", descripcion: "Para almacenamiento", precio: 8000 },
    { id: "permisos", nombre: "Permisos y Trámites", descripcion: "Requisitos legales incluidos", precio: 3000 },
    { id: "Kit", nombre: "Insumos anuales", descripcion: "Kit de insumos anuales", precio: 2500 },
    { id: "Plan", nombre: "Plan de mantenimiento ", descripcion: "Plan de mantenimiento anual", precio: 4500 },
    { id: "Disenos", nombre: "Diseños de logotipos", descripcion: "Diseño de logotipo", precio: 2000 },
    { id: "Volantes", nombre: "Volantes publicitarios", descripcion: "Diseño y creación de volantes publicitarios", precio: 1500 },
  ],
  Megalodon: [
    { id: "tinaco-2500", nombre: "Tinaco 2500L", descripcion: "Para almacenamiento", precio: 5000 },
    { id: "tinaco-5000", nombre: "Tinaco 5000L", descripcion: "Para almacenamiento", precio: 8000 },
    { id: "permisos", nombre: "Permisos y Trámites", descripcion: "Requisitos legales incluidos", precio: 3000 },
    { id: "Kit", nombre: "Insumos anuales", descripcion: "Kit de insumos anuales", precio: 2500 },
    { id: "Plan", nombre: "Plan de mantenimiento ", descripcion: "Plan de mantenimiento anual", precio: 4500 },
    { id: "Disenos", nombre: "Diseños de logotipos", descripcion: "Diseño de logotipo", precio: 2000 },
    { id: "Volantes", nombre: "Volantes publicitarios", descripcion: "Diseño y creación de volantes publicitarios", precio: 1500 },
  ],
  AtlantisMax: [
    { id: "tinaco-uno", nombre: "Tinaco 5000L y 2500L", descripcion: "Para agua cruda y producto terminado", precio: 9000 },
    { id: "tinaco-dos", nombre: "Tinaco 2500L y 2500L", descripcion: "Para agua cruda y producto terminado", precio: 7000 },
    { id: "permisos", nombre: "Permisos y Trámites", descripcion: "Requisitos legales incluidos", precio: 3000 },
    { id: "Kit", nombre: "Insumos anuales", descripcion: "Kit de insumos anuales", precio: 2500 },
    { id: "Plan", nombre: "Plan de mantenimiento ", descripcion: "Plan de mantenimiento anual", precio: 4500 },
    { id: "Disenos", nombre: "Diseños de logotipos", descripcion: "Diseño de logotipo", precio: 2000 },
    { id: "Volantes", nombre: "Volantes publicitarios", descripcion: "Diseño y creación de volantes publicitarios", precio: 1500 },
  ],
  MegalodonMax: [
    { id: "tinaco-uno", nombre: "Tinaco 5000L y 2500L", descripcion: "Para agua cruda y producto terminado", precio: 9000 },
    { id: "tinaco-dos", nombre: "Tinaco 2500L y 2500L", descripcion: "Para agua cruda y producto terminado", precio: 7000 },
    { id: "permisos", nombre: "Permisos y Trámites", descripcion: "Requisitos legales incluidos", precio: 3000 },
    { id: "Kit", nombre: "Insumos anuales", descripcion: "Kit de insumos anuales", precio: 2500 },
    { id: "Plan", nombre: "Plan de mantenimiento ", descripcion: "Plan de mantenimiento anual", precio: 4500 },
    { id: "Disenos", nombre: "Diseños de logotipos", descripcion: "Diseño de logotipo", precio: 2000 },
    { id: "Volantes", nombre: "Volantes publicitarios", descripcion: "Diseño y creación de volantes publicitarios", precio: 1500 },
  ],
  Vending5: [
    { id: "permisos", nombre: "Permisos y Trámites", descripcion: "Requisitos legales incluidos", precio: 3000 },
    { id: "Volantes", nombre: "Volantes publicitarios", descripcion: "Diseño y creación de volantes publicitarios", precio: 1500 },
    { id: "limpieza", nombre: "5 bidones de 20 Litros", descripcion: "5 Productos de limpieza", precio: 3000 },
  ],
  Vending8: [
    { id: "permisos", nombre: "Permisos y Trámites", descripcion: "Requisitos legales incluidos", precio: 3000 },
    { id: "Volantes", nombre: "Volantes publicitarios", descripcion: "Diseño y creación de volantes publicitarios", precio: 1500 },
    { id: "limpieza", nombre: "8 bidones de 20 Litros", descripcion: "8 Productos de limpieza", precio: 3000 },
    { id: "Rack", nombre: "Rack para bidones ", descripcion: "Rack para bidones", precio: 8000 },
  ],
};

export default function Step3ExtrasConfigurator({ selectedModelId, onSelect, onNext }) {
  const extras = extrasPorMaquina[selectedModelId] || [];
  const [seleccionados, setSeleccionados] = useState([]);

  const toggleExtra = (id) => {
    const extraSeleccionado = extras.find((e) => e.id === id);
    const esTinaco = extraSeleccionado.nombre.toLowerCase().includes("tinaco");

    setSeleccionados((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        if (esTinaco) {
          const sinTinacos = prev.filter((itemId) => {
            const extra = extras.find((e) => e.id === itemId);
            return !extra.nombre.toLowerCase().includes("tinaco");
          });
          return [...sinTinacos, id];
        } else {
          return [...prev, id];
        }
      }
    });
  };

  const estaDeshabilitado = (extra) => {
    const hayTinacoSeleccionado = seleccionados.some((id) => {
      const seleccionado = extras.find((e) => e.id === id);
      return seleccionado?.nombre.toLowerCase().includes("tinaco");
    });
    const esTinaco = extra.nombre.toLowerCase().includes("tinaco");
    return hayTinacoSeleccionado && !seleccionados.includes(extra.id) && esTinaco;
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Extras Opcionales</h2>
      <ul className="space-y-4 max-w-3xl mx-auto">
        {extras.map((extra) => (
          <li
            key={extra.id}
            className={`border rounded-lg p-4 cursor-pointer transition ${
              seleccionados.includes(extra.id)
                ? "border-gray-900 bg-gray-50"
                : "border-gray-300 hover:border-gray-500"
            } ${estaDeshabilitado(extra) ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => {
              if (!estaDeshabilitado(extra)) toggleExtra(extra.id);
            }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">{extra.nombre}</p>
                <p className="text-gray-500 text-sm">{extra.descripcion}</p>
                <p className="text-sm font-bold text-gray-700">${extra.precio.toLocaleString()} MXN</p>
              </div>
              <input
                type="checkbox"
                checked={seleccionados.includes(extra.id)}
                readOnly
                disabled={estaDeshabilitado(extra)}
                className="w-5 h-5 accent-black"
              />
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const extrasSeleccionados = extras.filter((e) => seleccionados.includes(e.id));
          onSelect(extrasSeleccionados);
          onNext();
        }}
        className="bg-black text-white rounded-lg px-6 py-3 hover:opacity-90"
      >
        Continuar
      </button>
    </div>
  );
}