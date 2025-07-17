import React, { useState } from "react";

export default function CalculadoraNegocio() {
  const [precioGarrafon, setPrecioGarrafon] = useState(18);
  const [garrafonesDia, setGarrafonesDia] = useState("");
  const [costoServicios, setCostoServicios] = useState("");
  const [costoRenta, setCostoRenta] = useState("");
  const [costoInsumos, setCostoInsumos] = useState("");

  const resetValues = () => {
    setPrecioGarrafon(18);
    setGarrafonesDia("");
    setCostoServicios("");
    setCostoRenta("");
    setCostoInsumos("");
  };

  const safeValue = (value) => (value === "" ? 0 : Number(value));

  const ingresosDiarios = safeValue(garrafonesDia) * precioGarrafon;
  const gastosDiarios =
    (safeValue(costoServicios) / 30) + (safeValue(costoRenta) / 30) + safeValue(costoInsumos);
  const utilidadDiaria = ingresosDiarios - gastosDiarios;
  const utilidadMensual = utilidadDiaria * 30;
  const utilidadAnual = utilidadMensual * 12;

  return (
    <section id="calculadora" className="w-screen py-20 flex justify-center px-4 md:px-16">
      <div className="bg-[#0c80c7] max-w-5xl w-full rounded-xl shadow-2xl overflow-hidden grid md:grid-cols-2 text-white">
        <div className="p-10 space-y-6">
          <h2 className="text-xl font-bold tracking-wide">Precio por Garrafón</h2>
          <input
            type="range"
            min="10"
            max="50"
            value={precioGarrafon}
            onChange={(e) => setPrecioGarrafon(Number(e.target.value))}
            className="w-full accent-[#ccff00]"
          />
          <p className="text-center text-3xl font-extrabold text-[#ccff00] drop-shadow-lg">${precioGarrafon}</p>

          <h2 className="text-xl font-bold tracking-wide mt-6">Configura tu Negocio</h2>
          <div className="grid gap-5">
            <div className="flex flex-col">
              <label className="text-sm">Garrafones vendidos por día</label>
              <input
                type="number"
                value={garrafonesDia}
                onChange={(e) => setGarrafonesDia(e.target.value)}
                className="text-black p-3 rounded text-lg"
                placeholder="Ej. 50"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Pago mensual de servicios (luz + agua)</label>
              <input
                type="number"
                value={costoServicios}
                onChange={(e) => setCostoServicios(e.target.value)}
                className="text-black p-3 rounded text-lg"
                placeholder="Ej. 4065"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Renta de local (opcional)</label>
              <input
                type="number"
                value={costoRenta}
                onChange={(e) => setCostoRenta(e.target.value)}
                className="text-black p-3 rounded text-lg"
                placeholder="Ej. 0"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Costo insumos mensual</label>
              <input
                type="number"
                value={costoInsumos}
                onChange={(e) => setCostoInsumos(e.target.value)}
                className="text-black p-3 rounded text-lg"
                placeholder="Ej. 300"
              />
            </div>
            <button
              onClick={resetValues}
              className="w-full bg-[#ff5733] py-3 rounded font-bold text-lg"
            >
              RESETEAR VALORES
            </button>
          </div>
        </div>

        <div className="bg-[#3ab0e2] p-10 space-y-6 flex flex-col justify-center">
          <h2 className="text-xl font-bold tracking-wide drop-shadow-md">Resultados</h2>
          <div className="grid grid-cols-3 gap-4 text-center text-sm font-medium">
            <div>
              <p>Ingresos diarios</p>
              <p className="font-bold text-lg drop-shadow-sm">${ingresosDiarios.toFixed(2)}</p>
            </div>
            <div>
              <p>Gastos diarios</p>
              <p className="font-bold text-lg drop-shadow-sm">${gastosDiarios.toFixed(2)}</p>
            </div>
            <div>
              <p>Utilidad neta diaria</p>
              <p className="font-bold text-lg drop-shadow-sm">${utilidadDiaria.toFixed(2)}</p>
            </div>
            <div>
              <p>Ingresos mensuales</p>
              <p className="font-bold text-lg drop-shadow-sm">${(ingresosDiarios * 30).toFixed(2)}</p>
            </div>
            <div>
              <p>Gastos mensuales</p>
              <p className="font-bold text-lg drop-shadow-sm">${(gastosDiarios * 30).toFixed(2)}</p>
            </div>
            <div>
              <p>Utilidad mensual</p>
              <p className="font-bold text-lg drop-shadow-sm">${utilidadMensual.toFixed(2)}</p>
            </div>
            <div className="col-span-3">
              <p>Utilidad anual</p>
              <p className="font-bold text-2xl drop-shadow-sm">${utilidadAnual.toFixed(2)}</p>
            </div>
          </div>
          <p className="text-xs text-center">Calcula tu ganancia tomando en cuenta el margen que desees obtener.</p>
        </div>
      </div>
    </section>
  );
}
