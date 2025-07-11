import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Modal from "../pages/ModalProductos";
import { useCarrito } from "../context/CarritoContext";
import toast from "react-hot-toast";

// Simulación de datos
const categorias = ["Filtros", "Bombas", "Tanques", "Tuberías", "Conectores", "Accesorios"];

const productos = categorias.flatMap((categoria, catIndex) =>
  Array.from({ length: 10 }, (_, i) => ({
    id: catIndex * 10 + i + 1,
    nombre: `${categoria.slice(0, -1)} ${i + 1}`,
    descripcion: `Descripción del ${categoria.slice(0, -1).toLowerCase()} ${i + 1}`,
    imagen: `https://via.placeholder.com/150?text=${encodeURIComponent(categoria.slice(0, -1))}+${i + 1}`,
    categoria,
  }))
);

const agruparPorCategoria = (productos) => {
  return productos.reduce((acc, producto) => {
    if (!acc[producto.categoria]) acc[producto.categoria] = [];
    acc[producto.categoria].push(producto);
    return acc;
  }, {});
};

const Productos = () => {
  const productosPorCategoria = agruparPorCategoria(productos);
  const [categoriaActiva, setCategoriaActiva] = useState(categorias[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [productoActivo, setProductoActivo] = useState(null);

  const { agregarProducto } = useCarrito();
  const carruselRef = useRef(null);

  const handleAgregarCarrito = (producto) => {
    agregarProducto(producto);
    toast.success(`${producto.nombre} añadido al carrito 🎉`);
  };

  const handleVerMas = (producto) => {
    setProductoActivo(producto);
    setModalOpen(true);
  };

  const scrollCarrusel = (direction) => {
    if (!carruselRef.current) return;
    const scrollAmount = 300;
    carruselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Productos para Purificadoras</h2>

      {/* Barra de categorías */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              cat === categoriaActiva
                ? "text-white"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            style={
              cat === categoriaActiva
                ? { backgroundColor: "#24d4da", borderColor: "#24d4da" }
                : {}
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carrusel de productos de la categoría activa */}
      <div className="relative mb-12">
        <button
          onClick={() => scrollCarrusel("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
        >
          ‹
        </button>
        <button
          onClick={() => scrollCarrusel("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
        >
          ›
        </button>

        <div ref={carruselRef} className="overflow-x-auto scrollbar-hide px-8">
          <motion.div className="flex gap-4 w-max" drag="x" dragConstraints={{ left: -2000, right: 0 }}>
            {productosPorCategoria[categoriaActiva].map((producto) => (
              <motion.div
                key={producto.id}
                className="min-w-[250px] bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all cursor-grab active:cursor-grabbing"
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h4 className="text-lg font-semibold">{producto.nombre}</h4>
                <p className="text-sm text-gray-600 mb-4">{producto.descripcion}</p>
                <div className="flex justify-between gap-2">
                  <button
                    onClick={() => handleAgregarCarrito(producto)}
                    className="text-white px-3 py-1 rounded-xl text-sm transition"
                    style={{ backgroundColor: "#24d4da" }}
                  >
                    Añadir al carrito
                  </button>
                  <button
                    onClick={() => handleVerMas(producto)}
                    className="border border-gray-400 text-gray-800 px-3 py-1 rounded-xl text-sm hover:bg-gray-100 transition"
                  >
                    Ver más
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Modal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        producto={productoActivo}
        onAddToCart={handleAgregarCarrito}
      />
    </section>
  );
};

export default Productos;
