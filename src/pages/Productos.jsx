import React, { useState, useEffect } from "react";
import ProductModal from "../components/ProductModal";
import { useCarrito } from "../context/CarritoContext";
import toast from "react-hot-toast";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // ← Flechas modernas

const categorias = ["Filtros", "Bombas", "Tanques", "Tuberías", "Conectores", "Accesorios"];

const agruparPorCategoria = (productos) => {
  return productos.reduce((acc, producto) => {
    if (!acc[producto.categoria]) acc[producto.categoria] = [];
    acc[producto.categoria].push(producto);
    return acc;
  }, {});
};

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState(categorias[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [productoActivo, setProductoActivo] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 16;

  const { agregarProducto } = useCarrito();

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    setProductos(productosGuardados);
  }, []);

  const productosPorCategoria = agruparPorCategoria(productos);
  const productosFiltrados = productosPorCategoria[categoriaActiva] || [];

  // Calcular paginación
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPaginados = productosFiltrados.slice(inicio, fin);

  const handleAgregarCarrito = (producto) => {
    agregarProducto({
      ...producto,
      cantidad: 1,
      precio: producto.precio,
    });
    toast.success(`${producto.nombre} añadido al carrito 🎉`);
  };

  const handleVerMas = (producto) => {
    setProductoActivo(producto);
    setModalOpen(true);
  };

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Cuando cambie la categoría, volver a página 1
  useEffect(() => {
    setPaginaActual(1);
  }, [categoriaActiva]);

  return (
    <section className="p-6 max-w-7xl mx-auto pt-28 pb-16">
      <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-wide">
        Componentes para Purificadoras
      </h2>

      {/* Botones de categoría */}
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

      {/* Grid de productos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productosPaginados.map((producto) => (
          <div
            key={producto.id}
            className="flex flex-col items-center gap-3 cursor-pointer group"
            onClick={() => handleVerMas(producto)}
          >
            <div className="bg-white shadow-md rounded-2xl p-6 w-full aspect-[4/3] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src={producto.imagen || "https://via.placeholder.com/400x300"}
                alt={producto.nombre}
                className="object-contain max-h-[200px] transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            <p className="text-center text-base font-medium capitalize">{producto.nombre}</p>

            <p className="text-center text-black font-semibold text-base">
              MXN ${Number(producto.precio).toFixed(2)}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAgregarCarrito(producto);
              }}
              className="text-black px-5 py-2 rounded-full text-sm font-semibold hover:brightness-90 transition"
              style={{ backgroundColor: "#ccff00" }}
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
      {totalPaginas > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => cambiarPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
            className="p-2 border rounded-full hover:bg-gray-100 disabled:opacity-50 flex items-center justify-center transition"
            aria-label="Página anterior"
            title="Página anterior"
          >
            <FaChevronLeft size={14} />
          </button>

          {[...Array(totalPaginas)].map((_, i) => (
            <button
              key={i}
              onClick={() => cambiarPagina(i + 1)}
              className={`px-3 py-1 border rounded-full transition ${
                paginaActual === i + 1
                  ? "bg-[#ccff00] border-[#ccff00] text-black font-bold"
                  : "hover:bg-gray-100"
              }`}
              aria-current={paginaActual === i + 1 ? "page" : undefined}
              title={`Página ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => cambiarPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
            className="p-2 border rounded-full hover:bg-gray-100 disabled:opacity-50 flex items-center justify-center transition"
            aria-label="Página siguiente"
            title="Página siguiente"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      )}

      <ProductModal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        producto={productoActivo}
        onAddToCart={handleAgregarCarrito}
      />
    </section>
  );
};

export default Productos;
