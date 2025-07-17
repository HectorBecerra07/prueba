import React, { useState } from "react";
import Modal from "../pages/ModalProductos";
import { useCarrito } from "../context/CarritoContext";
import toast from "react-hot-toast";

const categorias = ["Filtros", "Bombas", "Tanques", "Tuberías", "Conectores", "Accesorios"];

const productos = categorias.flatMap((categoria, catIndex) =>
  Array.from({ length: 10 }, (_, i) => ({
    id: catIndex * 10 + i + 1,
    nombre: `${categoria.slice(0, -1)} ${i + 1}`,
    descripcion: `Descripción del ${categoria.slice(0, -1).toLowerCase()} ${i + 1}`,
    precioAntes: 5000,
    precioActual: 4200,
    imagen: `https://via.placeholder.com/300x300?text=${encodeURIComponent(categoria.slice(0, -1))}+${i + 1}`,
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

  const handleAgregarCarrito = (producto) => {
    agregarProducto(producto);
    toast.success(`${producto.nombre} añadido al carrito 🎉`);
  };

  const handleVerMas = (producto) => {
    setProductoActivo(producto);
    setModalOpen(true);
  };

  return (
    <section className="p-6 max-w-7xl mx-auto pt-28 pb-16">
      <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-wide">
        Componentes para Purificadoras
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium border transition ${
              cat === categoriaActiva
                ? "text-black font-semibold"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            style={
              cat === categoriaActiva
                ? { backgroundColor: "#ccff00", borderColor: "#ccff00" }
                : {}
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productosPorCategoria[categoriaActiva].map((producto) => (
          <div
            key={producto.id}
            className="flex flex-col items-center gap-2"
            onClick={() => handleVerMas(producto)}
          >
            <div className="bg-gray-50 w-full aspect-square flex items-center justify-center rounded-xl p-4">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="object-contain max-h-[150px]"
              />
            </div>

            <p className="text-center text-sm font-medium">{producto.nombre}</p>
            <p className="text-center text-black text-sm font-bold">
              MXN ${producto.precioActual.toFixed(2)}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAgregarCarrito(producto);
              }}
              className="text-black px-4 py-1 rounded-full text-xs font-semibold hover:brightness-90"
              style={{ backgroundColor: "#ccff00" }}
            >
              Añadir al carrito
            </button>
          </div>
        ))}
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
