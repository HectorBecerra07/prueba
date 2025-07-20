import React from "react";
import IniciaNegocio from "../pages/IniciaNegocio";
import CalculadoraNegocio from "../components/CalculadoraNegocio";
import CarruselImagenes from "../components/CarruselImagenes";

export default function LandingPage() {
  const handleScroll = () => {
    const target = document.getElementById("calculadora");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
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
      <CarruselImagenes />
      <div id="calculadora"> {/* 👈 Aquí el id para que el scroll funcione */}
        <CalculadoraNegocio />
      </div>
    </div>
  );
}
