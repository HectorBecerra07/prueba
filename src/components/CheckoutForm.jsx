import React, { useState } from "react";
import { useCarrito } from "../context/CarritoContext"; // Si no lo tienes, crea tu context de carrito

const CheckoutForm = ({ amount, cartItems = [] }) => {
  const { vaciarCarrito } = useCarrito();

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    estadoDireccion: "",
    codigoPostal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let numeroOrden = Number(localStorage.getItem("numeroOrden")) || 1;

    const nuevoPedido = {
      id: Date.now(),
      orden: numeroOrden,
      cliente: formData.nombre,
      correo: formData.correo,
      telefono: formData.telefono,
      direccion: formData.direccion,
      ciudad: formData.ciudad,
      estadoDireccion: formData.estadoDireccion,
      codigoPostal: formData.codigoPostal,
      productos: cartItems.map((p) => p.nombre),
      total: (amount / 100).toFixed(2),
      estadoPedido: "Pendiente",
    };

    // Guardar pedidos por usuario
    const pedidosUsuario = JSON.parse(localStorage.getItem(`pedidos-${formData.correo}`)) || [];
    localStorage.setItem(`pedidos-${formData.correo}`, JSON.stringify([...pedidosUsuario, nuevoPedido]));

    // Guardar pedidos para ADMIN
    const pedidosAdmin = JSON.parse(localStorage.getItem("pedidos")) || [];
    localStorage.setItem("pedidos", JSON.stringify([...pedidosAdmin, nuevoPedido]));

    localStorage.setItem("numeroOrden", (numeroOrden + 1).toString());

    // Limpiar carrito al terminar
    vaciarCarrito();

    alert(`Pedido recibido correctamente. Orden #${numeroOrden}.`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-10 flex flex-col md:flex-row gap-10 w-full max-w-5xl">
      <div className="flex-1 space-y-6">
        <h3 className="text-2xl font-semibold border-b pb-3">📦 Datos de Envío</h3>
        <div className="grid grid-cols-1 gap-4">
          <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
          <input type="email" name="correo" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
          <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
          <input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
          <input type="text" name="ciudad" placeholder="Ciudad" value={formData.ciudad} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
          <input type="text" name="estadoDireccion" placeholder="Estado" value={formData.estadoDireccion} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
          <input type="text" name="codigoPostal" placeholder="Código Postal" value={formData.codigoPostal} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between border rounded-2xl p-8 shadow-inner bg-gradient-to-b from-gray-50 to-white">
        <h3 className="text-2xl font-semibold border-b pb-3">🛒 Mis Productos</h3>
        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">No tienes productos en tu carrito.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{item.nombre}</p>
                  <p className="text-gray-500 text-sm">Cantidad: {item.cantidad}</p>
                </div>
                <p className="font-semibold">${(item.precio * item.cantidad).toFixed(2)} MXN</p>
              </div>
            ))
          )}
        </div>

        <div className="border-t pt-4">
          <p className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span className="text-lime-500">${(amount / 100).toFixed(2)} MXN</span>
          </p>
        </div>

        <button type="submit" className="mt-8 bg-[#ccff00] py-3 rounded-xl font-bold">Confirmar pedido</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
