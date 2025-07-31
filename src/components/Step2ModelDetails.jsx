import { useState } from "react";

const caracteristicasPorModelo = {
  Atlantis: [
    "500 garrafones por mes",
    "Filtrado por carbón activado",
    "Sistema UV incluido",
    "Bajo consumo energético",
    "Bomba 3/4 HP en acero inoxidable",
    "Presurizador automático",
    "Filtro de lecho profundo con gravas, arenas sílicas y zeolita (NSF)",
    "Filtro de carbón activado (NSF)",
    "Filtro suavizador con resina catiónica (NSF)",
    "Tanque de salmuera",
    "Portafiltro 10\" Slim con cartucho polyspun",
    "Lámpara UV de 16 LPM con balastro en acero inoxidable",
    "Generador de ozono + ventury 3/4",
    "Despachador automático 4 modalidades (1L, 4L, 10L, 20L)",
    "Sensor de flujo, enjuague de garrafón y luz interna",
    "Pantalla con sistema de botones y sensado de litros",
    "Monedero antirrobo con sistema de cambio",
    "Vinil personalizable"
  ],
  AtlantisMax: [
    "800 garrafones por mes",
    "Ósmosis inversa con bomba multietapas especial",
    "Filtro lecho profundo + carbón + suavizador (NSF)",
    "2 portafiltros polyspun (20” y 10” Slim)",
    "UV de 16 LPM + generador de ozono + ventury 3/4",
    "Despachador automático 4 modalidades",
    "Pantalla de botones, sensor de flujo y luz interna",
    "Monedero antirrobo con cambio",
    "Vinil personalizable"
  ],
  Megalodon: [
    "Agua purificada + alcalina certificada",
    "Capacidad 1000 garrafones/mes",
    "Filtro alcalinizador + sistema de 7 etapas",
    "2 lámparas UV (16 y 30 LPM)",
    "2 portafiltros 10” Slim + ozono y ventury 3/4",
    "Despachador con 7 modalidades (4 para agua 1, 3 para agua 2)",
    "Pantalla de botones, sensor de flujo, luz interna",
    "Monedero antirrobo con cambio",
    "Vinil personalizable"
  ],
  MegalodonMax: [
    "Máxima capacidad 1200 garrafones",
    "Ósmosis inversa + mineralización + alcalinización premium",
    "Controlador inteligente",
    "UV reforzado (16 y 30 LPM) + generador de ozono",
    "Filtro alcalinizador + 2 portafiltros 10” + 20”",
    "Despachador con 7 modalidades (agua purificada y alcalina)",
    "Pantalla de botones, sensor de flujo, luz interna",
    "Monedero antirrobo + vinil personalizable"
  ],
  AtlantisTouch: [
    "500 garrafones por mes",
    "Sistema completo de purificación + UV + ozono",
    "Gabinete de acero grado alimenticio",
    "Pantalla TOUCH interactiva de 8 pulgadas",
    "Despachador con 4 modalidades (1L, 4L, 10L, 20L)",
    "Sensado de litros, enjuague de garrafón",
    "Sensor de flujo, luz interna, 2 solenoides",
    "Monedero antirrobo con cambio",
    "Dispensador de tapas",
    "Marco en acero inoxidable",
    "Sistema de verificación de fallas",
    "Vinil personalizable contra luz UV"
  ],
  AtlantisMaxTouch: [
    "800 garrafones por mes",
    "Ósmosis inversa de alta producción",
    "Pantalla TOUCH interactiva de 8 pulgadas",
    "Gabinete de acero grado alimenticio",
    "Filtro lecho profundo, carbón activado y suavizador (NSF)",
    "UV 16 LPM + ozono + ventury",
    "2 portafiltros polyspun (20” y 10” Slim)",
    "Despachador automático 4 modalidades",
    "Monedero antirrobo con cambio",
    "Sensado de litros, luz interna, fallas, dispensador de tapas",
    "Vinil UV personalizado"
  ],
  MegalodonTouch: [
    "Capacidad 1000 garrafones/mes",
    "Agua purificada + alcalina certificada",
    "Gabinete de acero grado alimenticio",
    "Pantalla TOUCH interactiva de 8 pulgadas",
    "2 lámparas UV (16 y 30 LPM) + ozono + ventury",
    "Filtro alcalinizador + 2 portafiltros polyspun",
    "Despachador con 8 modalidades (4 agua 1, 4 agua 2)",
    "Sensado de litros, verificación de fallas, luz interna",
    "Monedero antirrobo con cambio",
    "Dispensador de tapas, marco acero inoxidable",
    "Vinil personalizable contra luz UV"
  ],
  MegalodonMaxTouch: [
    "Capacidad 1200 garrafones/mes",
    "Ósmosis inversa premium + alcalinización",
    "Gabinete acero grado alimenticio + rack en acero",
    "Pantalla TOUCH interactiva de 8 pulgadas",
    "Filtro alcalinizador + UV reforzado (16 y 30 LPM)",
    "Portafiltros 20” + 2 de 10” Slim",
    "Despachador con 8 modalidades (agua purificada y alcalina)",
    "Sensado de litros, luz interna, verificación de fallas",
    "Monedero antirrobo, dispensador de tapas",
    "Marco acero inoxidable, vinil personalizado UV"
  ], // 👇 Características para Purificadoras
  Neptuno: [
  "Bomba de 1/2 hp",
  "Presurizador automático",
  "Filtro de lecho profundo 10x54 (gravas, arenas sílicas, zeolita con certificación NSF)",
  "Filtro de carbón activado 10x54 (certificación NSF)",
  "Filtro suavizador 10x54 con resina catiónica (NSF), válvula manual 5 pasos",
  "Tanque de salmuera",
  "Portafiltro 10” Slim con cartucho polyspun",
  "Lámpara UV de 16 LPM con balastro en acero inoxidable",
  "Ventury de 3/4",
  "Generador de ozono",
  "Tarja de acero inoxidable (2 lavados internos, 2 externos, 2 llenados)"
],
NeptunoAPlus: [
  "Bomba de 1/2 hp",
  "Presurizador automático",
  "Filtro de lecho profundo 10x54 (gravas, arenas sílicas, zeolita con certificación NSF)",
  "Filtro de carbón activado 10x54 (certificación NSF)",
  "Filtro suavizador 10x54 con resina catiónica (NSF), válvula manual 5 pasos",
  "Tanque de salmuera",
  "Filtro alcalino",
  "Portafiltro 10” Slim con cartucho polyspun",
  "Lámpara UV de 16 LPM con balastro en acero inoxidable",
  "Ventury de 3/4",
  "Generador de ozono",
  "Tarja de acero inoxidable (2 lavados internos, 2 externos, 2 llenados)"
],
PremiumOsmosis: [
  "Bomba de 1/2 hp acero inoxidable 127v",
  "Presurizador automático",
  "Filtro de lecho profundo 10x54 (gravas, arenas sílicas, zeolita con certificación NSF)",
  "Filtro de carbón activado 10x54 (certificación NSF)",
  "Filtro suavizador 9x48 (NSF), válvula manual 5 pasos, resina catiónica",
  "Ósmosis inversa con portamembrana acero inoxidable, membrana 4x40, bomba multietapas Lotus, flujómetros, manómetros, válvula de aguja, rack acero",
  "Portafiltro 20” Slim + 10” Slim con cartuchos polyspun",
  "Bomba de 3/4 hp Jet acero inoxidable 127v",
  "Lámpara UV de 16 LPM con balastro en acero inoxidable",
  "Ventury de 3/4",
  "Generador de ozono",
  "Tarja de acero inoxidable (2 lavados internos, 2 externos, 2 llenados)"
],
PoseidonPro: [
  "Bomba de 1/2 hp",
  "Presurizador automático",
  "Filtro de lecho profundo 10x54 (gravas, arenas sílicas, zeolita con certificación NSF)",
  "Filtro de carbón activado 10x54 (certificación NSF)",
  "Filtro suavizador 10x54 con resina catiónica (NSF), válvula manual 5 pasos",
  "Ósmosis inversa con portamembrana acero inoxidable, membrana 4x40, bomba multietapas Lotus, rack acero, flujómetros, manómetros, válvula de aguja",
  "Portafiltro 20” Slim + 2 x 10” Slim con cartuchos polyspun",
  "Filtro alcalino",
  "Bomba de 1.5 hp Jet acero inoxidable 127v",
  "Lámparas UV de 16 LPM y 30 LPM con balastro en acero inoxidable",
  "Ventury de 3/4",
  "Generador de ozono",
  "Tarja de acero inoxidable (2 lavados internos, 2 externos, 2 llenados)"
],
};

export default function Step2ModelDetails({ modelo, vendingType, onNext, onBack }) {
  const [isTouch, setIsTouch] = useState(false);
  const precioBase = modelo.precio;

  const touchIncrement = vendingType === "Touch" ? 3000 : isTouch ? 3000 : 0;
  const precioFinal = precioBase + touchIncrement;

  const caracteristicas = caracteristicasPorModelo[modelo.id] || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Detalles de tu modelo seleccionado
      </h2>

      <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900">{modelo.nombre}</h3>
        <p className="text-gray-600">{modelo.descripcion}</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-gray-700 text-sm list-none">
          {caracteristicas.map((caracteristica, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-green-600 mt-[2px]">✔</span>
              <span>{caracteristica}</span>
            </li>
          ))}
        </ul>

        {vendingType === "Tradicional" && (
          <div className="flex items-center gap-3 mt-4">
            <input
              type="checkbox"
              id="touch"
              checked={isTouch}
              onChange={() => setIsTouch(!isTouch)}
              className="w-5 h-5 accent-black"
            />
            <label htmlFor="touch" className="text-sm font-medium text-gray-800">
              Convertir a pantalla Touch <span className="text-gray-500">(+ $3,000 MXN)</span>
            </label>
          </div>
        )}

        <p className="text-xl font-bold text-gray-800 mt-6">
          Desde <span className="text-black">${precioFinal.toLocaleString()} MXN</span>
        </p>

        {/* Botones juntos */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">
          <button
            onClick={onBack}
            className="bg-gray-300 text-gray-800 rounded-lg px-6 py-3 hover:bg-gray-400"
          >
            ← Regresar
          </button>

          <button
            onClick={() => onNext(touchIncrement)}
            className="bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-800 transition"
          >
            Siguiente: Personaliza tu equipo →
          </button>
        </div>
      </div>
    </div>
  );
}
