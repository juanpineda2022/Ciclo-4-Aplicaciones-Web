const express = require("express");
const { leerCategoria } = require("../controllers/categoriaController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");


//CRUD
//authMiddleware: función de seguridad. Quienes estén autenticados pueden usar estas funciones
router.get("/", authMiddleware, categoriaController.leerCategoria);

router.post("/", authMiddleware, categoriaController.crearCategoria);

router.put("/:id", authMiddleware, categoriaController.actualizarCategoria);

router.delete("/:id", authMiddleware, categoriaController.borrarCategoria);

module.exports = router;