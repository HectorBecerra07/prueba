import React from "react";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const promociones = [
  {
    id: 1,
    titulo: "¡Llévate 2x1 en purificadoras!",
    descripcion: "Compra una purificadora y llévate otra gratis.",
    imagen: "/img/promos/promo1.jpg",
  },
  {
    id: 2,
    titulo: "Hasta 30% en tu primer pedido",
    descripcion: "Para nuevos emprendedores. Aplica en modelos seleccionados.",
    imagen: "/img/promos/promo2.jpg",
  },
  {
    id: 3,
    titulo: "Vending + Instalación GRATIS",
    descripcion: "Incluye asesoría, puesta en marcha y garantía extendida.",
    imagen: "/img/promos/promo3.jpg",
  },
];

const topSellers = [
  {
    titulo: "Purificadora Pro Max",
    imagen: "/img/top/pro-max.jpg",
  },
  {
    titulo: "Vending Touch 8",
    imagen: "/img/top/vending-touch.jpg",
  },
  {
    titulo: "Vending Limpieza 8",
    imagen: "/img/top/vending-limpieza.jpg",
  },
];

const combos2en1 = [
  {
    titulo: "Purificadora + Vending Touch",
    imagen: "/img/combos/2en1-touch.jpg",
  },
  {
    titulo: "Purificadora + Vending Tradicional",
    imagen: "/img/combos/2en1-tradicional.jpg",
  },
  {
    titulo: "Purificadora + Vending Limpieza",
    imagen: "/img/combos/2en1-limpieza.jpg",
  },
];

const combo3en1 = {
  titulo: "Combo 3 en 1: Puri + Vending Touch + Limpieza",
  descripcion: "La solución completa para tu emprendimiento",
  imagen: "/img/combos/3en1.jpg",
};

export default function Promociones() {
  return (
    <>
      <Helmet>
        <title>Promociones | Darmax</title>
        <meta name="description" content="Descubre nuestras promociones exclusivas para emprender con Darmax." />
        <link rel="canonical" href="https://tudominio.com/promociones" />
      </Helmet>

      {/* Carrusel de Promociones */}
      <section className="mt-24"> {/* Cambia a pt-32 si tu navbar es fixed */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          loop
          pagination={{ clickable: true }}
          className="h-72 md:h-96"
        >
          {promociones.map((promo) => (
            <SwiperSlide key={promo.id}>
              <div className="relative w-full h-full">
                <img
                  src={promo.imagen}
                  alt={promo.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center px-4">
                  <div className="text-white">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">{promo.titulo}</h2>
                    <p className="text-sm md:text-lg">{promo.descripcion}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Sección Top Sellers */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">Top Sellers</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {topSellers.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src={item.imagen} alt={item.titulo} className="w-full h-48 object-cover" />
              <div className="p-4 text-center font-semibold text-slate-700">{item.titulo}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección 2 en 1 */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">Combos 2 en 1</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {combos2en1.map((combo, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src={combo.imagen} alt={combo.titulo} className="w-full h-48 object-cover" />
              <div className="p-4 text-center font-semibold text-slate-700">{combo.titulo}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección 3 en 1 */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">Combo 3 en 1</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src={combo3en1.imagen} alt={combo3en1.titulo} className="w-full h-64 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{combo3en1.titulo}</h3>
            <p className="text-gray-600 text-sm">{combo3en1.descripcion}</p>
          </div>
        </div>
      </section>
    </>
  );
}
