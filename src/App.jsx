// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Componentes globales
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

// Páginas
import Nosotros from "./pages/Nosotros";
import IniciaNegocio from "./pages/IniciaNegocio";
import Promociones from "./pages/Promociones";
import ProyectosEmpresariales from "./pages/ProyectosEmpresariales";
import Productos from "./pages/Productos"; // ✅ CORREGIDO (antes tenía la p en minúscula)
import Carrito from "./pages/Carrito";
import Login from "./pages/logins/Login";
import Register from "./pages/logins/Register";
import ForgotPassword from "./pages/logins/ForgotPassword";
import ResetPassword from "./pages/logins/ResetPassword";
import NotFound from "./pages/NotFound";

// Envoltura para animación entre rutas
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

// Contenido principal con Navbar, Footer y Rutas
function AppContent() {
  const location = useLocation();
  const hideLayoutRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className="p-6 min-h-[calc(100vh-200px)]">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
            <Route path="/nosotros" element={<PageWrapper><Nosotros /></PageWrapper>} />
            <Route path="/productos" element={<PageWrapper><Productos /></PageWrapper>} />
            <Route path="/inicia-tu-negocio" element={<PageWrapper><IniciaNegocio /></PageWrapper>} />
            <Route path="/promociones" element={<PageWrapper><Promociones /></PageWrapper>} />
            <Route path="/proyectos-empresariales" element={<PageWrapper><ProyectosEmpresariales /></PageWrapper>} />
            <Route path="/carrito" element={<PageWrapper><Carrito /></PageWrapper>} />
            <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
            <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
            <Route path="/forgot-password" element={<PageWrapper><ForgotPassword /></PageWrapper>} />
            <Route path="/reset-password" element={<PageWrapper><ResetPassword /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}

// Componente raíz envuelto en Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
