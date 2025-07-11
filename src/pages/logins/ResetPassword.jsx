import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Obtener el token desde la URL (?token=XYZ)
  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!password || !confirm) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (!token) {
      setError("Token inválido o expirado.");
      return;
    }

    // Aquí iría la lógica real con tu backend
    console.log("✅ Reset token:", token);
    console.log("🔐 Nueva contraseña:", password);

    setSuccess("Contraseña actualizada correctamente.");

    // Redirigir al login después de 2 segundos
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Restablecer contraseña
        </h2>

        {error && (
          <p className="text-red-600 mb-4 text-sm text-center">{error}</p>
        )}
        {success && (
          <p className="text-green-600 mb-4 text-sm text-center">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nueva contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ccff00]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-gray-700">Confirmar contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ccff00]"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ccff00] text-black font-semibold py-2 rounded-md hover:bg-[#b6e600] transition-colors"
          >
            Actualizar contraseña
          </button>
        </form>
      </div>
    </div>
  );
}
