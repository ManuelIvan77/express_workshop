const bodyparser=require('body-parser');
const morgan = require('morgan');
const express = require("express");
const req = require("express/lib/request");
const app= express();
const pokemon = require('./routes/pokemon');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* 

Verbos HTTP
GET, Obtener un recurso
POST, Guardar o Publicar algo, almacenar o crear
PATCH, Actualización de un dato de un recurso en específico
PUT, modifica todos los elementos, un recurso completo
DELETE, elimina un recurso
*/

app.get("/", (req,res,next)=>{
    return res.status(200).json({code: 1, message: "Bienvenido al Pokedek"});
});

app.use("/pokemon", pokemon);

app.use((req, res, next)=>{
    res.status(404).json({code: 404, message: "URL no encontrada"});
});

app.listen(process.env.PORT||3000, ()=>{
    console.log("Server is running...");
});