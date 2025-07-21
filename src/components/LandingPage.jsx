import React from "react";
import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>Darmax | Purificadoras de Agua, Máquinas Vending y Negocios de Limpieza</title>
        <meta
          name="description"
          content="Inicia tu negocio de purificadoras de agua, máquinas vending o productos de limpieza con Darmax. Tecnología rentable para emprendedores."
        />
        <link rel="canonical" href="https://tudominio.com/" />
        <meta property="og:title" content="Darmax | Purificadoras de Agua, Máquinas Vending y Negocios de Limpieza" />
        <meta
          property="og:description"
          content="Líderes en soluciones para emprendedores: purificadoras, vending de agua, limpieza y más."
        />
        <meta property="og:image" content="https://tudominio.com/img/og-image.png" />
        <meta property="og:url" content="https://tudominio.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-gradient-negocio flex flex-col font-sans text-gray-800 overflow-x-hidden">
        <section className="relative w-full text-white px-4 md:px-16 pt-20 pb-40 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full relative z-10">
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                IMPULSA TU <span style={{ color: "#ccff00" }}>NEGOCIO</span>
              </h1>
              <p className="text-white text-base md:text-lg mb-6">
                Lleva tu emprendimiento al siguiente nivel con tecnología inteligente y rentable.
              </p>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={handleScroll}
                  className="inline-block text-black font-semibold py-3 px-6 rounded shadow transition hover:brightness-90 max-w-xs w-full text-center"
                  style={{ backgroundColor: "#ccff00" }}
                >
                  CALCULA TUS GANANCIAS
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/imgsinfondo.png"
                alt="Máquina vending"
                className="max-w-xs md:max-w-md mx-auto"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
            <svg
              className="w-full h-[150px] md:h-[200px] lg:h-[240px]"
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

        <IniciaNegocio />
        <CarruselImagenes />

        <div id="calculadora">
          <CalculadoraNegocio />
        </div>
      </div>
    </>
  );
}
