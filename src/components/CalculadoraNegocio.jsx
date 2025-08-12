import React, { useState } from "react";

export default function CalculadoraNegocio() {
  const [tipo, setTipo] = useState("agua");

  // Fondo dinámico por tipo
  const bgClass =
    tipo === "limpieza"
      ? "bg-gradient-to-b from-pink-400 via-fuchsia-500 to-rose-500"
      : "bg-gradient-to-b from-cyan-400 to-teal-500";

  return (
    <section
      className={`min-h-screen ${bgClass} flex flex-col items-center justify-center w-full p-4 md:p-10 gap-6 overflow-hidden`}
    >
      <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow text-center">
        CALCULADORA DE GANANCIAS
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <button
          onClick={() => setTipo("agua")}
          className={`px-8 py-3 rounded-full transition-all duration-300 font-bold ${
            tipo === "agua"
              ? "bg-lime-300 text-black scale-105"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          Agua
        </button>
        <button
          onClick={() => setTipo("limpieza")}
          className={`px-8 py-3 rounded-full transition-all duration-300 font-bold ${
            tipo === "limpieza"
              ? "bg-lime-300 text-black scale-105"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          Productos de Limpieza
        </button>
      </div>

      <div className="w-full max-w-5xl">
        {tipo === "agua" ? <CalculadoraAgua /> : <CalculadoraProductos />}
      </div>
    </section>
  );
}

function CalculadoraAgua() {
  const [precioGarrafon, setPrecioGarrafon] = useState(18);
  const [garrafonesDia, setGarrafonesDia] = useState("");
  const [costoServicios, setCostoServicios] = useState("");
  const [costoRenta, setCostoRenta] = useState("");
  const costoInsumos = 0;

  const safeValue = (value) => (value === "" ? 0 : Number(value));

  const ingresosDiarios = safeValue(garrafonesDia) * precioGarrafon;
  const gastosDiarios =
    safeValue(costoServicios) / 30 + safeValue(costoRenta) / 30 + costoInsumos;
  const utilidadDiaria = ingresosDiarios - gastosDiarios;
  const utilidadMensual = utilidadDiaria * 30;
  const utilidadAnual = utilidadMensual * 12;

  return (
    <div className="w-full flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">
      <div className="bg-white p-6 md:p-10 space-y-4 text-gray-800 md:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Agua - Configura tu Negocio
        </h2>

        <input
          type="range"
          min="10"
          max="100"
          value={precioGarrafon}
          onChange={(e) => setPrecioGarrafon(Number(e.target.value))}
          className="w-full accent-lime-300"
        />
        <p className="text-center text-2xl font-extrabold text-lime-400">
          ${precioGarrafon}
        </p>

        <div className="space-y-3">
          <Input label="Garrafones por día" value={garrafonesDia} setValue={setGarrafonesDia} />
          <Input label="Servicios (mensual)" value={costoServicios} setValue={setCostoServicios} />
          <Input label="Renta (mensual)" value={costoRenta} setValue={setCostoRenta} />
          <div className="flex flex-col">
            <label>Insumos (mensual)</label>
            <input
              type="text"
              value="0"
              readOnly
              className="w-full rounded-xl bg-gray-100 border border-gray-300 p-3 cursor-not-allowed"
            />
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <Resultados
          theme="aqua" // <- tarjetas con degradado cian/teal
          ingresosDiarios={ingresosDiarios}
          gastosDiarios={gastosDiarios}
          utilidadDiaria={utilidadDiaria}
          utilidadMensual={utilidadMensual}
          utilidadAnual={utilidadAnual}
        />
      </div>
    </div>
  );
}

function CalculadoraProductos() {
  const [precioLitro, setPrecioLitro] = useState(16);
  const [litrosDia, setLitrosDia] = useState("");
  const [costoServicios, setCostoServicios] = useState("");
  const [costoRenta, setCostoRenta] = useState("");
  const [costoInsumos, setCostoInsumos] = useState("");

  const safeValue = (value) => (value === "" ? 0 : Number(value));

  const ingresosDiarios = safeValue(litrosDia) * precioLitro;
  const gastosDiarios =
    safeValue(costoServicios) / 30 + safeValue(costoRenta) / 30 + safeValue(costoInsumos);
  const utilidadDiaria = ingresosDiarios - gastosDiarios;
  const utilidadMensual = utilidadDiaria * 30;
  const utilidadAnual = utilidadMensual * 12;

  return (
    <div className="w-full flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">
      <div className="bg-white p-6 md:p-10 space-y-4 text-gray-800 md:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold text-center">Productos de Limpieza</h2>

        {/* Acento ROSA en slider y valor */}
        <input
          type="range"
          min="10"
          max="100"
          value={precioLitro}
          onChange={(e) => setPrecioLitro(Number(e.target.value))}
          className="w-full accent-rose-400"
        />
        <p className="text-center text-2xl font-extrabold text-rose-300">
          ${precioLitro}
        </p>

        <div className="space-y-3">
          <Input label="Litros por día" value={litrosDia} setValue={setLitrosDia} />
          <Input label="Servicios (mensual)" value={costoServicios} setValue={setCostoServicios} />
          <Input label="Renta (mensual)" value={costoRenta} setValue={setCostoRenta} />
          <Input label="Insumos (mensual)" value={costoInsumos} setValue={setCostoInsumos} />
        </div>
      </div>

      <div className="md:w-1/2">
        <Resultados
          theme="rose" // <- tarjetas con degradado ROSA
          ingresosDiarios={ingresosDiarios}
          gastosDiarios={gastosDiarios}
          utilidadDiaria={utilidadDiaria}
          utilidadMensual={utilidadMensual}
          utilidadAnual={utilidadAnual}
        />
      </div>
    </div>
  );
}

function Input({ label, value, setValue }) {
  const handleChange = (e) => {
    const cleanValue = e.target.value.replace(/[^0-9]/g, "");
    setValue(cleanValue);
  };

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={value}
        onChange={handleChange}
        className="w-full rounded-xl bg-gray-100 border border-gray-300 p-3 focus:outline-none focus:ring-4 focus:ring-lime-300"
      />
    </div>
  );
}

function Resultados({
  theme = "aqua", // 'aqua' | 'rose'
  ingresosDiarios,
  gastosDiarios,
  utilidadDiaria,
  utilidadMensual,
  utilidadAnual,
}) {
  const datos = [
    { label: "Ingresos diarios", valor: ingresosDiarios },
    { label: "Gastos diarios", valor: gastosDiarios },
    { label: "Utilidad diaria", valor: utilidadDiaria },
    { label: "Mensual", valor: utilidadMensual },
    { label: "Anual", valor: utilidadAnual },
  ];

  // Degradado de tarjetas según tema
  const tileGradient =
    theme === "rose"
      ? "from-pink-400 via-fuchsia-500 to-rose-500"
      : "from-cyan-400 to-teal-500";

  // Color de título "Resultados" (puedes cambiar a rosa si prefieres)
  const titleClass =
    theme === "rose" ? "text-rose-300" : "text-lime-300";

  return (
    <div className="p-6 md:p-10 bg-[#021D39] text-white flex flex-col justify-center space-y-4 h-full">
      <h2 className={`text-2xl md:text-3xl font-bold ${titleClass} text-center`}>
        Resultados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {datos.map((dato) => (
          <div
            key={dato.label}
            className={`bg-gradient-to-tr ${tileGradient} p-4 rounded-2xl text-center shadow-lg`}
          >
            <p className="text-base font-semibold text-white/80">{dato.label}</p>
            <p className="text-2xl font-extrabold text-white drop-shadow">
              ${dato.valor.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
