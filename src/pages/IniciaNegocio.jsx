import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const modelos = [
  {
    id: "Purificadora",
    nombre: "PURIFICADORAS",
    imagen: "/img/vending/mostrador.png",
    precio: 54957,
    descripcion: "Ideal para emprendedores. Capacidad 600 garrafones/mes.",
    rutaInfo: "/purificadora-info",
  },
  {
    id: "Vending",
    nombre: "MAQUINAS VENDING",
    imagen: "/img/vending/TOUCHAGUA.png",
    precio: 54950,
    descripcion: "Para negocio en crecimiento. 1200 garrafones/mes.",
    rutaInfo: "/vending-info",
  },
  {
    id: "Vending-Limpieza",
    nombre: "VENDING DE LIMPIEZA",
    imagen: "/img/vending/5productos.jpg", // ✅ Ruta correcta ya puesta
    precio: 23000,
    descripcion: "Automatizada para venta de productos de limpieza.",
    rutaInfo: "/vending-limpieza-info",
  },
];

const TarjetaModelo = ({ modelo, navigate }) => {
  const [errorImagen, setErrorImagen] = useState(false);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl border border-gray-100">
      <div className="w-full h-72 md:h-80 bg-white flex items-center justify-center p-4">
        {!errorImagen ? (
          <img
            src={modelo.imagen}
            alt={modelo.nombre}
            loading="lazy"
            className="w-full h-full object-contain"
            onError={() => setErrorImagen(true)}
          />
        ) : (
          <span className="text-gray-400 text-sm text-center">Imagen no disponible</span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{modelo.nombre}</h3>
        <p className="text-md text-gray-500 mb-1">
          Desde ${modelo.precio.toLocaleString()} MXN
        </p>
        <p className="text-sm text-gray-600 mb-4">{modelo.descripcion}</p>

        <button
          onClick={() => navigate(`/configurar-maquina/${modelo.id}`)}
          className="w-full py-2 rounded-xl font-medium hover:brightness-90 transition mb-3"
          style={{ backgroundColor: "#ccff00", color: "black" }}
        >
          Configurar esta opción
        </button>

        <button
          onClick={() => navigate(modelo.rutaInfo)}
          className="w-full py-2 rounded-xl font-medium border border-black text-black hover:bg-black hover:text-white transition"
        >
          Conoce más
        </button>
      </div>
    </div>
  );
};

const IniciaNegocio = ({ inicioRef }) => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Inicia tu Negocio con Purificadoras y Máquinas Vending | Darmax</title>
      </Helmet>

      <div
        ref={inicioRef}
        className="min-h-screen bg-white py-20 px-6 flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14 drop-shadow text-center">
          INICIA TU NEGOCIO CON DARMAX
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl">
          {modelos.map((modelo) => (
            <TarjetaModelo key={modelo.id} modelo={modelo} navigate={navigate} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IniciaNegocio;
