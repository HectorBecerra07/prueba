import React, { useState, useEffect } from "react";

const ModalProductoForm = ({ show, onClose, onSave, producto }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    if (producto) {
      setNombre(producto.nombre);
      setPrecio(producto.precio);
      setCategoria(producto.categoria);
      setImagen(producto.imagen);
    } else {
      setNombre("");
      setPrecio("");
      setCategoria("");
      setImagen("");
    }
  }, [producto]);

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !precio || !categoria) return;
    onSave({ nombre, precio, categoria, imagen });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-96 space-y-4 shadow-lg">
        <h3 className="text-lg font-bold">
          {producto ? "Editar Producto" : "Nuevo Producto"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="Filtros">Filtros</option>
            <option value="Bombas">Bombas</option>
            <option value="Tanques">Tanques</option>
            <option value="Tuberías">Tuberías</option>
            <option value="Conectores">Conectores</option>
            <option value="Accesorios">Accesorios</option>
          </select>
          <input
            type="text"
            placeholder="URL de la Imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            className="w-full border rounded p-2"
          />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="text-gray-600">
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded px-4 py-2"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalProductoForm;
