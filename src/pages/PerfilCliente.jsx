import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function PerfilCliente() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const pedidos = JSON.parse(localStorage.getItem(`pedidos-${user?.email}`)) || [];

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">¡Hola, {user?.name}!</h2>
          <p className="text-gray-500">Correo: {user?.email}</p>
        </div>

        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:opacity-90 transition"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 shadow-md">
        <h3 className="text-2xl font-semibold mb-6">Tus pedidos</h3>
        {pedidos.length === 0 ? (
          <p className="text-gray-500">No tienes pedidos aún.</p>
        ) : (
          <div className="divide-y">
            {pedidos.map((pedido) => (
              <div key={pedido.id} className="py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <p className="font-bold">Pedido #{pedido.orden || "Sin número"}</p>
                  <p className="text-gray-500 text-sm">
                    Productos: {pedido.productos.join(", ")}
                  </p>
                </div>
                <div className="text-right md:text-left">
                  <p className="font-semibold">${pedido.total} MXN</p>
                  <p className="text-sm">
                    <span className={`font-bold ${pedido.estadoPedido === "Entregado" ? "text-green-600" : "text-yellow-500"}`}>
                      {pedido.estadoPedido}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Tus datos</h3>
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-bold">Nombre:</span> {user?.name}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Email:</span> {user?.email}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Teléfono:</span> No registrado
          </p>
        </div>
      </div>
    </div>
  );
}
