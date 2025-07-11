import React from "react";
import IniciaNegocio from "../pages/IniciaNegocio"; // 👈 CAMBIO IMPORTANTE

export default function LandingPage() {
  const handleScroll = () => {
    const target = document.getElementById("inicia-negocio");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* SECCIÓN DESTACADA */}
      <section className="relative bg-[#24d4da] text-white px-6 py-16 pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              IMPULSA TU <span style={{ color: "#ccff00" }}>NEGOCIO</span>
            </h2>
            <p className="text-white text-base md:text-lg mb-6">
              Lleva tu emprendimiento al siguiente nivel con tecnología inteligente y rentable.
            </p>
            <button
              onClick={handleScroll}
              className="inline-block hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded shadow transition"
              style={{ backgroundColor: "#ccff00" }}
            >
              CALCULA TUS GANANCIAS
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/imgsinfondo.png"
              alt="Máquina vending"
              className="max-w-full mx-auto"
            />
          </div>
        </div>

        {/* Ola blanca SVG */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
          <svg
            className="w-full h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,128 C240,320 960,0 1440,192 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
      </section>

      {/* 👇 Aquí se inserta el componente completo */}
      <IniciaNegocio />
    </div>
  );
}
