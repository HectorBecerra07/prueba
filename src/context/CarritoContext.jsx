import React, { createContext, useContext, useState, useEffect } from "react";

// Crear contexto
const CarritoContext = createContext();

// Hook personalizado
export const useCarrito = () => useContext(CarritoContext);

// Proveedor
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const data = localStorage.getItem("carrito");
    return data ? JSON.parse(data) : [];
  });

  // Persistencia en localStorage
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarProducto = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + producto.cantidad }
            : p
        );
      } else {
        return [...prev, { ...producto }];
      }
    });
  };

  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalProductos = carrito.reduce((acc, p) => acc + p.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        totalProductos,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
