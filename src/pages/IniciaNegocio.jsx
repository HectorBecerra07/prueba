import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const modelos = [
  {
    id: "Purificadora",
    nombre: "PURIFICADORAS",
    imagen: "/img/purificadora-basica.png",
    precio: 54950,
    descripcion: "Ideal para emprendedores. Capacidad 600 garrafones/mes.",
    rutaInfo: "/purificadora-info",
  },
  {
    id: "Vending",
    nombre: "MAQUINAS VENDING",
    imagen: "/img/purificadora-intermedia.png",
    precio: 54950,
    descripcion: "Para negocio en crecimiento. 1200 garrafones/mes.",
    rutaInfo: "/vending-info",
  },
  {
    id: "Vending-Limpieza",
    nombre: "VENDING DE LIMPIEZA",
    imagen: "/img/vending/vendinglimpieza.jpg",
    precio: 23000,
    descripcion: "Automatizada para venta de productos de limpieza.",
    rutaInfo: "/vending-limpieza-info",
  },
];

const IniciaNegocio = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Inicia tu Negocio con Purificadoras y Máquinas Vending | Darmax</title>
        <meta
          name="description"
          content="Elige entre purificadoras de agua, máquinas vending y soluciones de limpieza para comenzar tu negocio con Darmax."
        />
        <link rel="canonical" href="https://tudominio.com/inicia-tu-negocio" />
        <meta property="og:title" content="Inicia tu Negocio con Purificadoras y Máquinas Vending | Darmax" />
        <meta
          property="og:description"
          content="Soluciones para emprendedores: purificadoras, vending de agua y máquinas para limpieza. Comienza tu negocio hoy con Darmax."
        />
        <meta property="og:image" content="https://tudominio.com/img/og-image.png" />
        <meta property="og:url" content="https://tudominio.com/inicia-tu-negocio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-white py-20 px-6 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14 drop-shadow text-center">
          INICIA TU NEGOCIO CON DARMAX
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl">
          {modelos.map((modelo) => (
            <div
              key={modelo.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl border border-gray-100"
            >
              <div className="w-full h-72 md:h-80 bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={modelo.imagen}
                  alt={modelo.nombre}
                  className="max-h-full max-w-full object-contain"
                />
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-xl text-lg font-semibold hover:brightness-90 transition"
            style={{ backgroundColor: "#ccff00", color: "black" }}
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </>
  );
};

export default IniciaNegocio;
