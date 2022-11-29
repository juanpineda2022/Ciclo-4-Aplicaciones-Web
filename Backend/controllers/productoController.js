const producto = require("../models/producto");

exports.leerProducto = async(req, res) =>{
    res.json({msg:"aquí se ejecutó leer producto"});
}
exports.crearProducto = async(req, res) =>{
    res.json({msg:"aquí se ejecutó crearc producto"});
}
exports.actualizarProducto = async(req, res) =>{
    res.json({msg:"aquí se ejecutó actualizar producto"});
}
exports.borrarProducto = async(req, res) =>{
    res.json({msg:"aquí se ejecutó borrar producto"});
}