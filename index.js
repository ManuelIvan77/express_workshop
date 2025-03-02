const express = require("express");
const app= express();

/* 

Verbos HTTP
GET, Obtener un recurso
POST, Guardar o Publicar algo
PATCH, Actualización de un dato de un recurso en específico
PUT, modifica todos los elementos
DELETE, elimina un recurso
*/

app.get("/", (req,res,next)=>{
    res.status(200
        
    );
    res.send("Bienvenido");
});


app.listen(3000, ()=>{
    console.log("Server is running...");
});