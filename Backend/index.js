const express = require("express");
const connectingDB = require("./config/db");
const usuarioRouters = require("./routers/usuarioRouters");
const authRouters = require("./routers/authRouters");
const categoriaRouters = require("./routers/categoriaRouters");
const productoRouters = require("./routers/productoRouters");

//conectar a la bd
connectingDB();

const app = express();

//habilitar JSON en express: express.json
app.use(express.json({extended : true}));

//rutas o router
// app.use("/",(req,res) =>{
//     res.json( {msg: "hola mundo g13"})
// });

//Rutas y Endpoints
app.use("/api/usuarios", usuarioRouters);
app.use("/api/auth", authRouters);
app.use("/api/categoria", categoriaRouters);
app.use("/api/producto", productoRouters);


app.listen(4000, () => {
    console.log("Servidor está corriendo en el puerto 4000")
});