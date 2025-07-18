import React from "react";

const pedidosSimulados = [
  {
    id: 1,
    cliente: "Juan Pérez",
    productos: ["Filtro 1", "Bomba 2"],
    total: 8000,
    estado: "Pagado",
  },
  {
    id: 2,
    cliente: "María López",
    productos: ["Tanque 3"],
    total: 3500,
    estado: "Pendiente",
  },
  {
    id: 3,
    cliente: "Luis Torres",
    productos: ["Tubería 1", "Conector 2"],
    total: 2200,
    estado: "Entregado",
  },
];

const estadoColor = {
  Pagado: "bg-green-100 text-green-700",
  Pendiente: "bg-yellow-100 text-yellow-700",
  Entregado: "bg-blue-100 text-blue-700",
};

const PedidosAdmin = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Pedidos Recibidos</h2>

      <table className="w-full border text-sm rounded-xl overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3">Cliente</th>
            <th className="border p-3">Productos</th>
            <th className="border p-3">Total</th>
            <th className="border p-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {pedidosSimulados.map((pedido) => (
            <tr key={pedido.id} className="text-center">
              <td className="border p-3">{pedido.cliente}</td>
              <td className="border p-3">{pedido.productos.join(", ")}</td>
              <td className="border p-3">${pedido.total}</td>
              <td className="border p-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${estadoColor[pedido.estado]}`}>
                  {pedido.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PedidosAdmin;
