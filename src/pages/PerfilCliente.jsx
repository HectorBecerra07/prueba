import { useEffect, useMemo, useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const currency = (n) =>
  Number(n || 0).toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
  });

export default function PerfilCliente() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [pedidos, setPedidos] = useState([]);
  const [filtro, setFiltro] = useState("Todos"); // Todos | Pendiente | Entregado

  // Sincroniza los pedidos del usuario a partir del store global "pedidos"
  const syncPedidosUsuario = () => {
    if (!user?.email) return;

    // Lee global (para admin)
    const pedidosAdmin = JSON.parse(localStorage.getItem("pedidos")) || [];
    // Filtra por email
    const delUsuario = pedidosAdmin.filter((p) => p.correo === user.email);

    // También considera lo que ya hubiera en la clave del usuario (por si creó sin estar logueado)
    const keyUsuario = `pedidos-${user.email}`;
    const pedidosUsuario = JSON.parse(localStorage.getItem(keyUsuario)) || [];

    // Merge por id (prioriza el estado más reciente que venga del admin)
    const map = new Map();
    [...pedidosUsuario, ...delUsuario].forEach((p) => map.set(p.id, p));
    const result = Array.from(map.values()).sort((a, b) => b.id - a.id);

    // Persistimos para que el perfil siempre esté alineado
    localStorage.setItem(keyUsuario, JSON.stringify(result));
    setPedidos(result);
  };

  useEffect(() => {
    if (!user?.email) return;
    // 1) Carga inicial
    syncPedidosUsuario();

    // 2) Escucha cambios de localStorage (si admin cambia estado en otra pestaña)
    const onStorage = (e) => {
      if (e.key === "pedidos") {
        syncPedidosUsuario();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);

  const pedidosFiltrados = useMemo(() => {
    if (filtro === "Todos") return pedidos;
    return pedidos.filter((p) => (p.estadoPedido || "Pendiente") === filtro);
  }, [pedidos, filtro]);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto py-24 px-6 text-center">
        <h2 className="text-2xl font-bold">Debes iniciar sesión</h2>
        <p className="text-gray-500 mt-2">Para ver tu perfil y pedidos.</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-lg hover:opacity-90 transition"
        >
          Ir a iniciar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">¡Hola, {user?.name}!</h2>
          <p className="text-gray-500">Correo: {user?.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={syncPedidosUsuario}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
            title="Actualizar pedidos"
          >
            Actualizar
          </button>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:opacity-90 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Pedidos */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="text-2xl font-semibold">Tus pedidos</h3>
          <div className="inline-flex rounded-xl border border-gray-200 overflow-hidden">
            {["Todos", "Pendiente", "Entregado"].map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`px-4 py-2 text-sm font-medium ${
                  filtro === f ? "bg-[#ccff00] text-black" : "bg-white hover:bg-gray-50"
                } ${f !== "Todos" ? "border-l border-gray-200" : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {pedidosFiltrados.length === 0 ? (
          <p className="text-gray-500">No hay pedidos en esta vista.</p>
        ) : (
          <div className="divide-y">
            {pedidosFiltrados.map((pedido) => (
              <div
                key={pedido.id}
                className="py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
              >
                <div>
                  <p className="font-bold">Pedido #{pedido.orden || "Sin número"}</p>
                  <p className="text-gray-500 text-sm">
                    Productos: {(pedido.productos || []).join(", ")}
                  </p>
                </div>

                <div className="text-right md:text-left">
                  <p className="font-semibold">{currency(pedido.total)} MXN</p>
                  <p className="text-sm mt-1">
                    <span
                      className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-bold ${
                        (pedido.estadoPedido || "Pendiente") === "Entregado"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          (pedido.estadoPedido || "Pendiente") === "Entregado"
                            ? "bg-green-600"
                            : "bg-yellow-600"
                        }`}
                      />
                      {pedido.estadoPedido || "Pendiente"}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Datos */}
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
            <span className="font-bold">Teléfono:</span> {user?.phone || "No registrado"}
          </p>
        </div>
      </div>
    </div>
  );
}
