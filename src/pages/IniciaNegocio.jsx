import { useNavigate } from "react-router-dom";

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
    descripcion: "Automatizada para venta de productos de limpieza.",
  },
];

const IniciaNegocio = ({ showBackButton = true }) => {
  const navigate = useNavigate();

  return (
    <div id="inicia-negocio" className="bg-gray py-20 px-4">
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
              <p className="text-sm text-gray-600 mb-2">Desde ${modelo.precio.toLocaleString()} MXN</p>
              <p className="text-sm text-gray-600 mb-4">{modelo.descripcion}</p>
              <button
                onClick={() => navigate(`/configurar/${modelo.id}`)}
                className="text-sm bg-[#24d4da] text-white px-3 py-1 rounded-lg hover:opacity-90"
              >
                Configúralo
              </button>
            </div>
          </div>
        ))}
      </div>

      {showBackButton && (
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Volver al Inicio
          </button>
        </div>
      )}
    </div>
  );
};

export default IniciaNegocio;
