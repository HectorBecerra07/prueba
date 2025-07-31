import React, { useState, useEffect } from "react";
import ModalProductoForm from "../components/ModalProductoForm";

const ProductosAdmin = () => {
  const [productos, setProductos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [productoEditando, setProductoEditando] = useState(null);
  const [filtro, setFiltro] = useState("todos");

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    setProductos(productosGuardados);
  }, []);

  const guardarEnLocalStorage = (nuevosProductos) => {
    localStorage.setItem("productos", JSON.stringify(nuevosProductos));
  };

  const handleAgregar = (nuevoProducto) => {
    let nuevosProductos;
    if (productoEditando) {
      nuevosProductos = productos.map((p) =>
        p.id === productoEditando.id ? { ...nuevoProducto, id: productoEditando.id } : p
      );
    } else {
      nuevosProductos = [...productos, { ...nuevoProducto, id: Date.now() }];
    }
    setProductos(nuevosProductos);
    guardarEnLocalStorage(nuevosProductos);
    setProductoEditando(null);
    setModalOpen(false);
  };

  const handleEliminar = (id) => {
    const nuevosProductos = productos.filter((p) => p.id !== id);
    setProductos(nuevosProductos);
    guardarEnLocalStorage(nuevosProductos);
  };

  const handleEditar = (producto) => {
    setProductoEditando(producto);
    setModalOpen(true);
  };

  const productosFiltrados = filtro === "todos"
    ? productos
    : productos.filter((p) => p.categoria?.toLowerCase() === filtro.toLowerCase());

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Gestión de Productos</h2>

      <div className="flex items-center justify-between mb-4">
        <button
          className="px-4 py-2 rounded bg-cyan-500 text-white hover:bg-cyan-600"
          onClick={() => {
            setProductoEditando(null);
            setModalOpen(true);
          }}
        >
          + Agregar Producto
        </button>

        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="todos">Todos</option>
          <option value="purificador">Purificadores</option>
          <option value="vending">Máquinas Vending</option>
          <option value="limpieza">Limpieza</option>
        </select>
      </div>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Precio</th>
            <th className="border p-2">Categoría</th>
            <th className="border p-2">Descripción</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Imagen</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((producto) => (
            <tr key={producto.id} className="text-center">
              <td className="border p-2">{producto.nombre}</td>
              <td className="border p-2">${producto.precio}</td>
              <td className="border p-2">{producto.categoria}</td>
              <td className="border p-2">{producto.descripcion}</td>
              <td className="border p-2">{producto.stock}</td>
              <td className="border p-2">
                {producto.imagen && (
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-16 h-16 object-cover mx-auto"
                  />
                )}
              </td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleEditar(producto)}
                  className="text-blue-500 hover:underline"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleEliminar(producto.id)}
                  className="text-red-500 hover:underline"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalProductoForm
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAgregar}
        producto={productoEditando}
      />
    </div>
  );
};

export default ProductosAdmin;
