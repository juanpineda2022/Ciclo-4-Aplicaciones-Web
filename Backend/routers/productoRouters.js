const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const productoController = require("../controllers/productoController")

//CRUD
//authMiddleware: función de seguridad. Quienes estén autenticados pueden usar estas funciones
router.get("/", authMiddleware, productoController.leerProducto);

router.post("/", authMiddleware, productoController.crearProducto);

router.put("/", authMiddleware, productoController.actualizarProducto);

router.delete("/", authMiddleware, productoController.borrarProducto);

module.exports = router;