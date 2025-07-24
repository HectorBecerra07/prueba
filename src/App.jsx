import { HelmetProvider } from "react-helmet-async";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// COMPONENTES
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./components/LandingPage";

// PÁGINAS
import Nosotros from "./pages/Nosotros";
import IniciaNegocio from "./pages/IniciaNegocio";
import Promociones from "./pages/Promociones";
import ProyectosEmpresariales from "./pages/ProyectosEmpresariales";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Login from "./pages/logins/Login";
import Register from "./pages/logins/Register";
import ForgotPassword from "./pages/logins/ForgotPassword";
import ResetPassword from "./pages/logins/ResetPassword";
import NotFound from "./pages/NotFound";
import Configurar from "./pages/configurar/Configurar";
import WizardGeneral from "./pages/WizardGeneral";
import ProductPage from "./pages/ProductPage";
import VendingInfo from "./pages/VendingInfo";
import PurificadoraInfo from "./pages/PurificadoraInfo";
import VendingLimpiezaInfo from "./pages/VendingLimpiezaInfo";
import PerfilCliente from "./pages/PerfilCliente";

// ADMIN
import LoginAdmin from "./administrador/LoginAdmin";
import DashboardAdmin from "./administrador/DashboardAdmin";
import ProductosAdmin from "./administrador/pages/ProductosAdmin";
import PedidosAdmin from "./administrador/pages/PedidosAdmin";
import ReportesAdmin from "./administrador/pages/ReportesAdmin";
import ClientesAdmin from "./administrador/pages/ClientesAdmin";

// VIDEOS
import Videos from "./pages/Videos";
import VideoDetalle from "./pages/VideoDetalle";

const stripePromise = loadStripe("TU_CLAVE_PUBLICA_DE_STRIPE");

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

function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop /> {/* Scroll fix funcional aquí */}
      {!hideLayout && <Navbar />}
      <main className="w-screen overflow-x-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            {/* RUTAS PÚBLICAS */}
            <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
            <Route path="/nosotros" element={<PageWrapper><Nosotros /></PageWrapper>} />
            <Route path="/productos" element={<PageWrapper><Productos /></PageWrapper>} />
            <Route path="/productos/:id" element={<PageWrapper><ProductPage /></PageWrapper>} />
            <Route path="/inicia-tu-negocio" element={<PageWrapper><IniciaNegocio /></PageWrapper>} />
            <Route path="/vending-info" element={<PageWrapper><VendingInfo /></PageWrapper>} />
            <Route path="/purificadora-info" element={<PageWrapper><PurificadoraInfo /></PageWrapper>} />
            <Route path="/vending-limpieza-info" element={<PageWrapper><VendingLimpiezaInfo /></PageWrapper>} />
            <Route path="/promociones" element={<PageWrapper><Promociones /></PageWrapper>} />
            <Route path="/proyectos-empresariales" element={<PageWrapper><ProyectosEmpresariales /></PageWrapper>} />
            <Route path="/carrito" element={
              <Elements stripe={stripePromise}>
                <PageWrapper><Carrito /></PageWrapper>
              </Elements>
            } />
            <Route path="/configurar/:id" element={<PageWrapper><Configurar /></PageWrapper>} />
            <Route path="/configurar-maquina/:id" element={<PageWrapper><WizardGeneral /></PageWrapper>} />

            {/* LOGIN / PERFIL */}
            <Route path="/perfil" element={<PageWrapper><PerfilCliente /></PageWrapper>} />
            <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
            <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
            <Route path="/forgot-password" element={<PageWrapper><ForgotPassword /></PageWrapper>} />
            <Route path="/reset-password" element={<PageWrapper><ResetPassword /></PageWrapper>} />

            {/* VIDEOS */}
            <Route path="/videos" element={<PageWrapper><Videos /></PageWrapper>} />
            <Route path="/videos/:id" element={<PageWrapper><VideoDetalle /></PageWrapper>} />

            {/* ADMIN */}
            <Route path="/admin/login" element={<LoginAdmin />} />
            <Route path="/admin/dashboard" element={<DashboardAdmin />}>
              <Route path="productos" element={<ProductosAdmin />} />
              <Route path="pedidos" element={<PedidosAdmin />} />
              <Route path="reportes" element={<ReportesAdmin />} />
              <Route path="clientes" element={<ClientesAdmin />} />
            </Route>

            {/* NOT FOUND */}
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  );
}

export default App;
