// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CarritoProvider } from "./context/CarritoContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarritoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CarritoProvider>
  </React.StrictMode>
);
