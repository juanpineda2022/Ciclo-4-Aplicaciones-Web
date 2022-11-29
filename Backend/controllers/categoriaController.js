const Categoria = require("../models/categoria");

//req: lo q se puede leer desde postman
//res: lo qe se envía hacia postman

exports.leerCategoria = async(req, res) =>{
    //res.json({msg:"aquí se ejecutó leer categoría"});
    try{
        const categoria = await Categoria.find({creador: req.usuario.id});
        res.json({categoria});

    }catch(error){
        console.log(error);
    }
}
exports.crearCategoria = async(req, res) =>{
    //res.json({msg:"aquí se ejecutó crearc categoría"});
    try{
        const categoria = new Categoria(req.body);

        categoria.creador = req.usuario.id;

        categoria.save();

        res.json(categoria);

    }catch(error){
        console.log(error);
    }
}
exports.actualizarCategoria = async(req, res) =>{
    //res.json({msg:"aquí se ejecutó actualizar categoría"});
    
    const {id} = req.params;
    const categoria = await Categoria.findById(id);
    if(!categoria){
        return res.status(404).json({msg:"Categoría no encontrada"});
    }

    if(categoria.creador.toString() !== req.usuario.id.toString()){
        return res.status(400).json({msg:"Acción no válida para este usuario"});
    }

    categoria.nombre = req.body.nombre || categoria.nombre;
    categoria.save();
    res.json({categoria});
    
}

exports.borrarCategoria = async(req, res) =>{
    //res.json({msg:"aquí se ejecutó borrar categoría"});
    try{
        await Categoria.deleteOne({_id: req.params.id}); //
        res.json({msg: "categoría eliminada"});
    }catch(error){
        console.log(error);
    }
}