import React, { useState } from "react";
import Modal from "../components/Modal";

const modelos = [
  {
    id: "Purificadora",
    nombre: "Purificadora Inicial",
    imagen: "/img/purificadora-basica.png",
    precio: 50000,
    descripcion: "Ideal para emprendedores. Capacidad 600 garrafones/mes.",
  },
  {
    id: "Vending",
    nombre: "Vending Inicial",
    imagen: "/img/purificadora-intermedia.png",
    precio: 43000,
    descripcion: "Para negocio en crecimiento. 1200 garrafones/mes.",
  },
  {
    id: "Vending-Limpieza",
    nombre: "Vending de Limpieza",
    imagen: "/img/purificadora-premium.png",
    precio: 23000,
    descripcion: "Automatizada para una venta de productos de limpieza.",
  },
];

const IniciaNegocio = () => {
  const [modeloSeleccionado, setModeloSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div id="inicia-negocio" className="bg-white py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Inicia tu negocio con tu purificadora
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {modelos.map((modelo) => (
          <div
            key={modelo.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={modelo.imagen}
              alt={modelo.nombre}
              className="w-full h-48 object-contain bg-gray-50"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 text-gray-800">{modelo.nombre}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Desde ${modelo.precio.toLocaleString()} MXN
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    setModeloSeleccionado(modelo);
                    setMostrarModal(true);
                  }}
                  className="text-sm text-blue-600 underline"
                >
                  Conoce más
                </button>
                <button className="text-sm bg-[#24d4da] text-white px-3 py-1 rounded-lg hover:opacity-90">
                  Configúralo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {mostrarModal && modeloSeleccionado && (
        <Modal onClose={() => setMostrarModal(false)}>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{modeloSeleccionado.nombre}</h2>
            <img
              src={modeloSeleccionado.imagen}
              alt={modeloSeleccionado.nombre}
              className="mx-auto h-48 object-contain mb-4"
            />
            <p className="text-gray-700 mb-4">{modeloSeleccionado.descripcion}</p>
            <p className="font-semibold">
              Precio desde: ${modeloSeleccionado.precio.toLocaleString()} MXN
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default IniciaNegocio;
