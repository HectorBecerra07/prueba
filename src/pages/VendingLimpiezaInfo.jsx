import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const especificacionesLimpieza = [
  {
    imagen: "/img/limpieza/dispensador.png",
    descripcion: "Dispensador automático de productos de limpieza.",
  },
  {
    imagen: "/img/limpieza/envases.png",
    descripcion: "Compatible con envases reutilizables o botellas PET.",
  },
  {
    imagen: "/img/limpieza/productos.png",
    descripcion: "Variedad de productos: cloro, detergente, suavizante, desinfectante.",
  },
  {
    imagen: "/img/limpieza/pantalla.png",
    descripcion: "Pantalla táctil intuitiva con menú de selección.",
  },
  {
    imagen: "/img/limpieza/formaspago.png",
    descripcion: "Pago con monedas, billetes, tarjeta o código QR.",
  },
];

export default function VendingLimpiezaInfo() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-400 to-green-500 py-20 px-6 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-20 text-center">
        Detalles de Vending de Limpieza
      </h2>

      <div className="flex flex-col gap-20 max-w-7xl mx-auto">
        {especificacionesLimpieza.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.img
                src={item.imagen}
                alt={`Vending limpieza detalle ${index}`}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 rounded-3xl shadow-2xl"
              />
              <div className="md:w-1/2">
                <motion.p
                  initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-white text-xl leading-relaxed bg-white/20 p-8 rounded-3xl shadow-lg backdrop-blur-md"
                >
                  {item.descripcion}
                </motion.p>
              </div>
            </motion.div>
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
    </div>
  );
}
