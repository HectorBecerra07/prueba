import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-[center_top] md:bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/img/repartidor-apuntando-la-botella-de-agua-en-el-hombro.jpg')",
      }}
    >
      <div className="backdrop-blur-md bg-white/40 border border-white/20 rounded-2xl shadow-2xl p-6 w-full max-w-lg mx-4 sm:mx-auto transition-all duration-300">
        {/* Header */}
        <div className="text-center py-4 border-b border-white/40 mb-4">
          <h5 className="text-2xl font-semibold text-black">Regístrate con</h5>
        </div>

        {/* Divider con logo de Darmax */}
        <div className="relative text-center mb-6">
          <img
            src="/img/darmax-logo.png"
            alt="Logo Darmax"
            className="h-20 mx-auto"
          />
          <div className="absolute inset-x-0 top-1/2 border-t border-black/30 -z-10" />
        </div>

        {/* Formulario */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full px-4 py-3 bg-white/80 border border-white/40 rounded-lg text-sm text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#24d4da]"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 bg-white/80 border border-white/40 rounded-lg text-sm text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#24d4da]"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-3 bg-white/80 border border-white/40 rounded-lg text-sm text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#24d4da]"
          />

          <label className="flex items-center text-sm text-black mt-2">
            <input type="checkbox" className="mr-2 accent-black" />
            Acepto los{" "}
            <a href="#" className="font-bold underline ml-1 text-black">
              Términos y condiciones
            </a>
          </label>

          <button className="w-full py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition">
            Crear cuenta
          </button>

          <p className="text-sm text-center mt-6 text-black">
            ¿Ya tienes una cuenta?
            <Link to="/login" className="font-bold underline ml-1 text-black">
              Inicia sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
