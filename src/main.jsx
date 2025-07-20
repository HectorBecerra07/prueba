import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CarritoProvider } from "./context/CarritoContext";
import { UserProvider } from "./context/UserContext"; // ✅ Agregas tu contexto de usuario
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider> {/* ✅ Envolver para que funcione el login, nombre y perfil */}
      <CarritoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CarritoProvider>
    </UserProvider>
  </React.StrictMode>
);
