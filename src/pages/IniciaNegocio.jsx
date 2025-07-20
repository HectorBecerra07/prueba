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
    nombre: "Máquinas Vending",
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
    <div className="min-h-screen bg-white py-20 px-6 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14 drop-shadow text-center">
        Inicia tu negocio con tu purificadora
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {modelos.map((modelo) => (
          <div
            key={modelo.id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl border border-gray-100"
          >
            <div className="w-full h-56 bg-gray-50 flex items-center justify-center p-6">
              <img
                src={modelo.imagen}
                alt={modelo.nombre}
                className="h-full object-contain"
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

              {modelo.id === "Vending" && (
                <button
                  onClick={() => navigate("/vending-info")}
                  className="w-full py-2 rounded-xl font-medium border border-black text-black hover:bg-black hover:text-white transition"
                >
                  Conoce más
                </button>
              )}
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
  );
};

export default IniciaNegocio;
