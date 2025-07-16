import { useNavigate } from "react-router-dom";

const modelos = [
  {
    id: "Purificadora",
    nombre: "Purificadora Inicial",
    imagen: "/img/purificadora-basica.png",
    precio: 54950,
    descripcion: "Ideal para emprendedores. Capacidad 600 garrafones/mes.",
  },
  {
    id: "Vending",
    nombre: "Maquinas Vending",
    imagen: "/img/purificadora-intermedia.png",
    precio: 54950,
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

const IniciaNegocio = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Inicia tu negocio con tu purificadora
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {modelos.map((modelo) => (
          <div
            key={modelo.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl border border-gray-200"
          >
            <div className="w-full h-56 bg-gray-50 flex items-center justify-center p-4">
              <img
                src={modelo.imagen}
                alt={modelo.nombre}
                className="h-full object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{modelo.nombre}</h3>
              <p className="text-md text-gray-500 mb-1">Desde ${modelo.precio.toLocaleString()} MXN</p>
              <p className="text-sm text-gray-600 mb-4">{modelo.descripcion}</p>

              <button
                onClick={() => navigate(`/configurar-maquina/${modelo.id}`)}
                className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800"
              >
                Configurar esta opción
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-700 transition"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default IniciaNegocio;
