const bodyparser=require('body-parser');
//
const morgan = require('morgan');
const express = require("express");
const req = require("express/lib/request");
//Routers
const app= express();
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');
const cors = require('./middleware/cors');

app.use(cors);
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

app.use("/",index);

app.use("/user",user);
app.use(auth);
app.use("/pokemon", pokemon);
app.use(notFound);

app.listen(process.env.PORT||3000, ()=>{
    console.log("Server is running...");
});