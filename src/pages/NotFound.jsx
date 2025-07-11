import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
      <p className="text-gray-400 mb-6">
        Lo sentimos, la página que buscas no existe o fue movida.
      </p>
      <Link
        to="/"
        className="bg-[#ccff00] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#b6e600] transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
