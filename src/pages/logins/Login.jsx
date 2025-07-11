import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🔐 Intentando iniciar sesión...");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-[center_top] md:bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/img/fondo-login.jpg')",
      }}
    >
      <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl shadow-2xl p-6 w-full max-w-lg mx-4 sm:mx-auto transition-all duration-300">
        <h2 className="text-xl font-semibold text-center text-black mb-4 drop-shadow">
          Iniciar sesión
        </h2>

        {/* Logo animado */}
        <div className="relative text-center mb-6">
          <img
            src="/img/darmax-logo.png"
            alt="Logo Darmax"
            className="h-20 mx-auto animate-fade-in drop-shadow"
            style={{ animationDuration: "1s" }}
          />
          <div className="absolute inset-x-0 top-1/2 border-t border-white/30 -z-10" />
        </div>

        {/* FORMULARIO DE LOGIN */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 bg-white/60 border border-white/40 rounded-lg text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#24d4da]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 bg-white/60 border border-white/40 rounded-lg text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#24d4da]"
            required
          />

          <label className="flex items-center gap-2 text-sm text-black">
            <input type="checkbox" className="accent-white" />
            Recordarme
          </label>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-gray-900 to-slate-800 text-white text-sm font-bold rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* ENLACES ADICIONALES */}
        <div className="text-sm text-center mt-6 text-black">
          <p>
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="font-bold underline">
              Regístrate ahora
            </Link>
          </p>
          <p className="mt-2">
            <Link to="/forgot-password" className="underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
