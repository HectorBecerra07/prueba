import React, { useState } from "react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import SlideCart from "./SlideCart"; // ⬅️ Importación del slide

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [showCart, setShowCart] = useState(false); // ⬅️ Estado para abrir/cerrar carrito

  const { carrito } = useCarrito();
  const totalItems = carrito.reduce((acc, p) => acc + p.cantidad, 0);

  return (
    <>
      <nav className="bg-[#000000] border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 z-50 relative">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          {/* LOGO DARMAX */}
          <Link to="/" className="flex items-center">
            <img
              src="/img/darmax-logo.png"
              alt="Logo Darmax"
              className="h-10 md:h-16 mr-2"
            />
          </Link>

          <div className="flex items-center space-x-4 md:order-2">
            {/* Botón de carrito */}
            <button
              onClick={() => setShowCart(true)}
              className="relative text-white hover:text-[#ccff00]"
            >
              <ShoppingBagIcon className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Login */}
            <Link to="/login" className="text-white hover:text-[#ccff00]">
              <UserIcon className="w-6 h-6" />
            </Link>

            {/* Botón hamburguesa */}
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="inline-flex items-center p-2 text-white rounded-lg md:hidden"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>

          {/* Menú de navegación */}
          <div
            className={`relative w-full md:block md:w-auto overflow-hidden ${
              navOpen ? "block" : "hidden"
            }`}
          >
            {navOpen && (
              <div className="absolute bottom-0 w-full h-20 z-[-1] animate-waveRise">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="#a7dfff"
                    fillOpacity="1"
                    d="M0,160L60,170.7C120,181,240,203,360,186.7C480,171,600,117,720,101.3C840,85,960,107,1080,128C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                  />
                </svg>
              </div>
            )}

            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 items-center text-white relative z-10 py-4">
              <li>
                <Link to="/inicia-tu-negocio" className="py-2 px-3 hover:text-[#ccff00]">
                  INICIA TU NEGOCIO
                </Link>
              </li>
              <li>
                <Link to="/productos" className="py-2 px-3 hover:text-[#ccff00]">
                  PRODUCTOS
                </Link>
              </li>
              <li>
                <Link to="/promociones" className="py-2 px-3 hover:text-[#ccff00]">
                  PROMOCIONES
                </Link>
              </li>
              <li>
                <Link to="/proyectos-empresariales" className="py-2 px-3 hover:text-[#ccff00]">
                  PROYECTOS EMPRESARIALES
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="py-2 px-3 hover:text-[#ccff00]">
                  NOSOTROS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🛒 SlideCart visible solo cuando se activa */}
      <SlideCart isOpen={showCart} onClose={() => setShowCart(false)} />
    </>
  );
}
