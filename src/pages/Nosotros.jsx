import React from "react";

export default function Nosotros() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          🌟 Quiénes Somos
        </h2>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Misión */}
          <div className="bg-[#f0f9fa] p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-[#24d4da] mb-4">🎯 Misión</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Brindar soluciones accesibles e innovadoras en purificación de agua y vending, que impulsen el emprendimiento y mejoren la calidad de vida de las personas.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-[#f0f9fa] p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-[#24d4da] mb-4">🚀 Visión</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ser la empresa líder en Latinoamérica en soluciones de purificación y automatización de negocios, reconocida por su compromiso social, tecnología y cercanía con el cliente.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-gray-100 rounded-2xl p-10 shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">💎 Nuestros Valores</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-sm">
            <li className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">🤝 Compromiso</li>
            <li className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">💡 Innovación</li>
            <li className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">📦 Calidad</li>
            <li className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">🌎 Responsabilidad social</li>
            <li className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">📈 Desarrollo continuo</li>
            <li className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">🫱 Cercanía con el cliente</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
