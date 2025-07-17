import React, { useState } from "react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import CarritoLateral from "./CarritoLateral";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { carrito } = useCarrito();
  const totalItems = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const textColor = isHome ? "text-white" : "text-black";

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/img/darmax-logo.png"
              alt="Logo Darmax"
              className="h-10 md:h-14"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/inicia-tu-negocio" className={`${textColor} font-medium hover:text-[#ccff00]`}>INICIA TU NEGOCIO</Link>
            <Link to="/productos" className={`${textColor} font-medium hover:text-[#ccff00]`}>PRODUCTOS</Link>
            <Link to="/promociones" className={`${textColor} font-medium hover:text-[#ccff00]`}>PROMOCIONES</Link>
            <Link to="/proyectos-empresariales" className={`${textColor} font-medium hover:text-[#ccff00]`}>PROYECTOS</Link>
            <Link to="/nosotros" className={`${textColor} font-medium hover:text-[#ccff00]`}>NOSOTROS</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setShowCart(true)} className={`relative ${textColor} hover:text-[#ccff00]`}>
              <ShoppingBagIcon className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <Link to="/login" className={`${textColor} hover:text-[#ccff00]`}>
              <UserIcon className="w-6 h-6" />
            </Link>
            <button onClick={() => setNavOpen(!navOpen)} className={`${textColor} md:hidden`}>
              {navOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className={`absolute top-0 right-0 w-full md:hidden transform transition-all duration-300 ${navOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} bg-white rounded-b-3xl shadow-xl`}>
          <div className="flex justify-end p-4">
            <button onClick={() => setNavOpen(false)}>
              <XMarkIcon className="w-6 h-6 text-black" />
            </button>
          </div>
          <ul className="flex flex-col items-center font-medium space-y-6 pb-6">
            <li><Link to="/inicia-tu-negocio" className="text-black text-lg" onClick={() => setNavOpen(false)}>INICIA TU NEGOCIO</Link></li>
            <li><Link to="/productos" className="text-black text-lg" onClick={() => setNavOpen(false)}>PRODUCTOS</Link></li>
            <li><Link to="/promociones" className="text-black text-lg" onClick={() => setNavOpen(false)}>PROMOCIONES</Link></li>
            <li><Link to="/proyectos-empresariales" className="text-black text-lg" onClick={() => setNavOpen(false)}>PROYECTOS</Link></li>
            <li><Link to="/nosotros" className="text-black text-lg" onClick={() => setNavOpen(false)}>NOSOTROS</Link></li>
          </ul>
        </div>
      </nav>

      <CarritoLateral isOpen={showCart} onClose={() => setShowCart(false)} />
    </>
  );
}
