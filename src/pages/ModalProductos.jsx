import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.1 } },
};

const ModalProductos = ({ show, onClose, producto, onAddToCart }) => {
  if (!producto) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white p-6 rounded-xl shadow-xl w-11/12 max-w-md relative"
            variants={modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              onClick={onClose}
            >
              &times;
            </button>

            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{producto.nombre}</h2>
            <p className="text-gray-700 mb-6">{producto.descripcion}</p>

            <button
              onClick={() => {
                onAddToCart(producto);
                onClose();
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition w-full"
            >
              Añadir al carrito
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalProductos;
