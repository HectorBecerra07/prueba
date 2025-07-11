import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CarritoProvider } from "./context/CarritoContext";
import { Toaster } from "react-hot-toast"; // 🎉 importar toaster

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarritoProvider>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </CarritoProvider>
  </React.StrictMode>
);
