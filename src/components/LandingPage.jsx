import React, { useState } from "react";
import IniciaNegocio from "../pages/IniciaNegocio";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function LandingPage() {
  const handleScroll = () => {
    const target = document.getElementById("calculadora");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [precioGarrafon, setPrecioGarrafon] = useState(18);
  const [garrafonesDia, setGarrafonesDia] = useState(50);
  const [costoServicios, setCostoServicios] = useState(4065);
  const [costoRenta, setCostoRenta] = useState(0);
  const [costoInsumos, setCostoInsumos] = useState(300);

  const ingresosDiarios = garrafonesDia * precioGarrafon;
  const gastosDiarios = (costoServicios / 30) + (costoRenta / 30) + costoInsumos;
  const utilidadDiaria = ingresosDiarios - gastosDiarios;
  const utilidadMensual = utilidadDiaria * 30;
  const utilidadAnual = utilidadMensual * 12;

  const productos = [
    { id: 1, nombre: "Refacción Filtro", precio: 250 },
    { id: 2, nombre: "Botella 20L", precio: 120 },
    { id: 3, nombre: "Dispensador Automático", precio: 1500 },
  ];

  const handleAddToCart = (nombre) => {
    alert(`Agregado al carrito: ${nombre}`);
  };

  return (
    <div className="w-screen min-h-screen font-sans text-gray-800 overflow-x-hidden bg-gradient-negocio">
      <section className="relative w-screen text-white px-4 md:px-16 pt-20 pb-40 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full relative z-10">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              IMPULSA TU <span style={{ color: "#ccff00" }}>NEGOCIO</span>
            </h2>
            <p className="text-white text-base md:text-lg mb-6">
              Lleva tu emprendimiento al siguiente nivel con tecnología inteligente y rentable.
            </p>
            <button
              onClick={handleScroll}
              className="inline-block text-black font-semibold py-2 px-6 rounded shadow transition hover:brightness-90"
              style={{ backgroundColor: "#ccff00" }}
            >
              CALCULA TUS GANANCIAS
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/imgsinfondo.png" alt="Máquina vending" className="max-w-full mx-auto" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
          <svg className="w-full h-[150px] md:h-[200px] lg:h-[240px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,128 C240,320 960,0 1440,192 L1440,320 L0,320 Z" />
          </svg>
        </div>
      </section>

      <IniciaNegocio />

      <section id="calculadora" className="w-screen py-20 flex justify-center px-4 md:px-16">
        <div className="bg-[#0c80c7] max-w-5xl w-full rounded-xl shadow-2xl overflow-hidden grid md:grid-cols-2 text-white">
          <div className="p-10 space-y-6">
            <h2 className="text-lg font-bold">PRECIO POR GARRAFÓN</h2>
            <input
              type="range"
              min="10"
              max="50"
              value={precioGarrafon}
              onChange={(e) => setPrecioGarrafon(Number(e.target.value))}
              className="w-full accent-[#ccff00]"
            />
            <p className="text-center text-2xl font-bold text-[#ccff00]">${precioGarrafon}</p>

            <h2 className="text-lg font-bold mt-6">COLOCA LOS VALORES EN LA CAJA</h2>
            <div className="grid gap-4">
              <div className="flex flex-col">
                <label className="text-sm">Garrafones vendidos por día</label>
                <input
                  type="number"
                  value={garrafonesDia}
                  onChange={(e) => setGarrafonesDia(Number(e.target.value))}
                  className="text-black p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Pago mensual de servicios (luz + agua)</label>
                <input
                  type="number"
                  value={costoServicios}
                  onChange={(e) => setCostoServicios(Number(e.target.value))}
                  className="text-black p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Renta de local (opcional)</label>
                <input
                  type="number"
                  value={costoRenta}
                  onChange={(e) => setCostoRenta(Number(e.target.value))}
                  className="text-black p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Costo insumos mensual</label>
                <input
                  type="number"
                  value={costoInsumos}
                  onChange={(e) => setCostoInsumos(Number(e.target.value))}
                  className="text-black p-2 rounded"
                />
              </div>
              <button className="w-full bg-[#ff5733] py-2 rounded font-bold">RESETEAR VALORES</button>
            </div>
          </div>

          <div className="bg-[#3ab0e2] p-10 space-y-4 flex flex-col justify-center">
            <h2 className="text-lg font-bold">RESULTADOS</h2>
            <div className="grid grid-cols-3 gap-3 text-center text-xs font-medium">
              <div>
                <p>Ingresos diarios</p>
                <p className="font-bold">${ingresosDiarios.toFixed(2)}</p>
              </div>
              <div>
                <p>Gastos diarios</p>
                <p className="font-bold">${gastosDiarios.toFixed(2)}</p>
              </div>
              <div>
                <p>Utilidad neta diaria</p>
                <p className="font-bold">${utilidadDiaria.toFixed(2)}</p>
              </div>
              <div>
                <p>Ingresos mensuales</p>
                <p className="font-bold">${(ingresosDiarios * 30).toFixed(2)}</p>
              </div>
              <div>
                <p>Gastos mensuales</p>
                <p className="font-bold">${(gastosDiarios * 30).toFixed(2)}</p>
              </div>
              <div>
                <p>Utilidad mensual</p>
                <p className="font-bold">${utilidadMensual.toFixed(2)}</p>
              </div>
              <div className="col-span-3">
                <p>Utilidad anual</p>
                <p className="font-bold">${utilidadAnual.toFixed(2)}</p>
              </div>
            </div>
            <p className="text-xs mt-4">Calcula tu ganancia tomando en cuenta el margen que desees obtener.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
