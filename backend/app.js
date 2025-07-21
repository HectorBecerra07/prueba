import express from "express";
import productosRouter from "./routes/productos.js";
import pagosRouter from "./routes/pagos.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/productos", productosRouter);
app.use("/api/pagos", pagosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
