import express from "express";
import multer from "multer";
import pool from "../db/index.js";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/", upload.single("imagen"), async (req, res) => {
  const { nombre, precio, categoria, descripcion, stock } = req.body;
  const imagen = req.file ? req.file.filename : null;

  try {
    await pool.query(
      "INSERT INTO productos (nombre, precio, categoria, descripcion, stock, imagen) VALUES ($1, $2, $3, $4, $5, $6)",
      [nombre, precio, categoria, descripcion, stock, imagen]
    );

    res.status(201).json({ mensaje: "Producto guardado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar producto" });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

export default router;
