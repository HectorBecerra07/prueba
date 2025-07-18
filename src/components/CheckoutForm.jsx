import React, { useState } from "react";

const CheckoutForm = ({ amount, cartItems = [] }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    direccion: "",
    ciudad: "",
    estado: "",
    codigoPostal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del pedido:", formData);
    alert("Pedido recibido. Aún no está conectado a Stripe.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-10 flex flex-col md:flex-row gap-10 w-full max-w-5xl"
    >
      <div className="flex-1 space-y-6">
        <h3 className="text-2xl font-semibold border-b pb-3">📦 Datos de Envío</h3>

        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-lime-400 outline-none"
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-lime-400 outline-none"
            required
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-lime-400 outline-none"
            required
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-lime-400 outline-none"
            required
          />
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            value={formData.estado}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-lime-400 outline-none"
            required
          />
          <input
            type="text"
            name="codigoPostal"
            placeholder="Código Postal"
            value={formData.codigoPostal}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-lime-400 outline-none"
            required
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between border rounded-2xl p-8 shadow-inner bg-gradient-to-b from-gray-50 to-white">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold border-b pb-3">🛒 Mis Productos</h3>

          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center">No tienes productos en tu carrito.</p>
            ) : (
              cartItems.map((item) => {
                const precio = Number(item.precio || 0);
                const cantidad = Number(item.cantidad || 0);
                const total = precio * cantidad;

                return (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-medium">{item.nombre}</p>
                      <p className="text-gray-500 text-sm">Cantidad: {cantidad}</p>
                    </div>
                    <p className="font-semibold">${total.toFixed(2)} MXN</p>
                  </div>
                );
              })
            )}
          </div>

          <div className="border-t pt-4">
            <p className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span className="text-lime-500">${(amount / 100).toFixed(2)} MXN</span>
            </p>
          </div>
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#ccff00", color: "#1a1a1a" }}
          className="w-full text-lg font-semibold py-3 rounded-xl shadow-md mt-8 hover:brightness-90 transition"
        >
          Confirmar pedido
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
