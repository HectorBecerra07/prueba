import React from "react";

const proyectos = [
  {
    id: 1,
    titulo: "Solución integral para oficinas corporativas",
    descripcion: "Instalación de purificadoras automáticas en más de 15 pisos, con mantenimiento mensual y sistema de reporte en línea.",
    imagen: "/img/proyectos/oficinas.jpg",
  },
  {
    id: 2,
    titulo: "Vending personalizado para hoteles",
    descripcion: "Diseñamos e instalamos vending machines con branding del hotel, operando 24/7 sin personal.",
    imagen: "/img/proyectos/hotel.jpg",
  },
  {
    id: 3,
    titulo: "Planta purificadora para centros comerciales",
    descripcion: "Proyecto llave en mano con capacidad de más de 10,000 litros/día. Incluye consultoría y capacitación.",
    imagen: "/img/proyectos/centro-comercial.jpg",
  },
];

export default function ProyectosEmpresariales() {
  return (
    <section className="mt-16 bg-white py-14 px-6 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
         Proyectos Empresariales
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-600 text-sm">{proyecto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/contacto"
          className="inline-block bg-[#ccff00] hover:bg-[#1cbcc3] text-black font-semibold py-3 px-6 rounded-lg transition"
        >
          ¿Tienes un proyecto? ¡Contáctanos!
        </a>
      </div>
    </section>
  );
}
