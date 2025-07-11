import React from "react";

const promociones = [
  {
    id: 1,
    titulo: "¡Llévate 2x1 en purificadoras!",
    descripcion: "Solo este mes, compra una purificadora y te damos otra igual ¡gratis!",
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
  {
    id: 4,
    titulo: "Crédito sin intereses 6 meses",
    descripcion: "Solicítalo ahora y paga en cómodas mensualidades sin intereses.",
    imagen: "/img/promos/promo4.jpg",
  },
  {
    id: 5,
    titulo: "Bonificación por referidos",
    descripcion: "Comparte tu experiencia DarMax y gana recompensas.",
    imagen: "/img/promos/promo5.jpg",
  },
];

export default function Promociones() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-10">
        🎉 Nuestras Promociones
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {promociones.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 duration-300"
          >
            <img
              src={promo.imagen}
              alt={promo.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {promo.titulo}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{promo.descripcion}</p>
              <button className="bg-[#24d4da] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#1cbcc3] transition">
                Aprovechar ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
