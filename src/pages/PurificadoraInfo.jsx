import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const especificacionesPurificadora = [
  {
    imagen: "/img/purificadora/filtrado.png",
    descripcion: "Sistema de filtración de múltiples etapas para garantizar pureza.",
  },
  {
    imagen: "/img/purificadora/uv.png",
    descripcion: "Desinfección con luz ultravioleta y ozono.",
  },
  {
    imagen: "/img/purificadora/tanque.png",
    descripcion: "Tanques de acero inoxidable grado alimenticio.",
  },
  {
    imagen: "/img/purificadora/diseno.png",
    descripcion: "Diseño compacto ideal para locales pequeños.",
  },
  {
    imagen: "/img/purificadora/produccion.png",
    descripcion: "Capacidad: hasta 3000 litros por día.",
  },
];

export default function PurificadoraInfo() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      containerRef.current?.scrollIntoView({ behavior: "auto" });
    }, 300); // Esperamos a que render y animaciones terminen

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-400 to-cyan-500 py-20 px-6 flex flex-col items-center"
    >
      <span id="scroll-anchor" className="absolute top-0" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-20 text-center">
        Detalles de las Plantas Purificadoras
      </h2>

      <div className="flex flex-col gap-20 max-w-7xl mx-auto">
        {especificacionesPurificadora.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.img
                src={item.imagen}
                alt={`Purificadora detalle ${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-full md:w-1/2 max-h-[300px] object-contain rounded-3xl shadow-2xl"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                className="md:w-1/2 text-white text-xl leading-relaxed bg-white/20 p-8 rounded-3xl shadow-lg backdrop-blur-md"
              >
                {item.descripcion}
              </motion.p>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-20 px-8 py-3 rounded-xl text-lg font-semibold hover:brightness-90 transition"
        style={{ backgroundColor: "#ccff00", color: "black" }}
      >
        Volver a la página anterior
      </button>
    </motion.div>
  );
}
