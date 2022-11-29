const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({path: "variables.env"});

exports.autenticarUsuario = async (req, res) => {
    const {password, email} = req.body;
    try{
        //Validar email y password

        //Validar email registrado
        let usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({msg:"el usuario no existe"});
             
        }
        //Validar Password
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password);

        if(!passwordCorrecto){
            return res.status(404).json({msg:"la contraseña es incorrecta"});
        }
        // Si todo es correcto: crear y firmar un token

        let payload = {
            usuario: {id: usuario.id},
        };
        //res.json(payload);
        
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn:'30d', //m(minuto), d(dias)
            },
            (error, token) =>{
                if (error) throw error;
                //Mensaje de confirmación
                res.json({token});
            }

        );

        //console.log("permitir ingresar");

    }catch(error){
        console.log(error);
    }
}

//Usuario ya se encuentra autenticado
exports.usuarioAutenticado = async(req, res) =>{
    try{
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({usuario});
    }catch(error){
        res.status(403).json({msg:"Hubo un error"});
    }
}