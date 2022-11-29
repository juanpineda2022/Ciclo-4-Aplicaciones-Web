const jwt = require("jsonwebtoken");

module.exports = function (req, res, next){
    //Lectura del token desde el header(encabezado) de postman
    const token = req.header("x-auth-token"); //(x-auth-token):llave para evaluar el token
    //console.log(token);

    //Revisar si se envió o no el token
    if(!token){
        return res.status(400).json({msg:"No hay token"});
    }

    //validación del token
    try{
        const cifrado = jwt.verify(token, process.env.SECRETA)
        req.usuario = cifrado.usuario;
        //console.log(cifrado.usuario);
        next();
    }catch(error){
        res.status(400).json({msg:"Token no válido"})
    }
}