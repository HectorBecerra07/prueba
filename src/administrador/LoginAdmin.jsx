import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarios = [
      {
        correo: "admin@tutienda.com",
        password: "admin123",
        nombre: "Maximiliano de la Torre",
      },
    ];

    const usuarioValido = usuarios.find(
      (user) => user.correo === email && user.password === password
    );

    if (usuarioValido) {
      localStorage.setItem("adminNombre", usuarioValido.nombre);
      navigate("/admin/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center">
          Panel Administrador
        </h2>
        <p className="text-center text-sm text-gray-400">
          Solo acceso autorizado
        </p>

        <input
          type="email"
          placeholder="Correo"
          className="w-full p-3 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition text-white py-2 rounded-lg"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginAdmin;
