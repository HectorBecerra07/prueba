// src/pages/ForgotPassword.jsx
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Por favor, ingresa tu correo.");
      return;
    }
    setMessage("Te hemos enviado un enlace para restablecer tu contraseña.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-white text-black p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">¿Olvidaste tu contraseña?</h2>
        {message && <p className="mb-4 text-sm text-green-600 text-center">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />
          <button type="submit" className="w-full bg-[#ccff00] py-2 rounded-md font-semibold">
            Enviar enlace
          </button>
        </form>
      </div>
    </div>
  );
}
