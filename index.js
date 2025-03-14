const bodyparser=require('body-parser');
const express = require("express");
const req = require("express/lib/request");
const app= express();
const {pokemon} = require('./pokedex.json');

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
    return res.status(200).send("Bienvenido al Pokedex");
});

app.post("/pokemon", (req,res, next) =>{
    return res.status(200).send(req.body);
});

app.get('/pokemon',(req,res,next)=>{
    console.log(req.params.name);
    return res.status(200).send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})', (req,res,next)=>{
    const id=req.params.id - 1;
    if (id >=0 && id <= 150) { 
        return res.status(200).send(pokemon[req.params.id - 1]) 
    }
            
    return res.status(404).send("Pokémon no encontrado");
        
    
    
});

app.get('/pokemon/:name([A-Za-z]+)',(req,res,next)=>{
    const name=req.params.name;
    /*for(i=0; i<pokemon.length;i++){
        if(pokemon[i].name.toUpperCase() == name.toUpperCase()){
            return res.status(200).send(pokemon[i]);
        }
    }*/

        //Operador Ternario, Concición ? retorno valor si verdadero : retorno valor si falso, se usa cuando queremos que de un If  se 
        // retorne algo
    const pk =pokemon.filter((p)=>{
        return (p.name.toUpperCase()==name.toUpperCase()) && p ;

    });

    /*(pk.length >0) ?  
    res.status(200).send(pk) : 
    res.status(404).send("Pokémon no encontrado");*/

    if(pk.length >0) { 
        return res.status(200).send(pk); 
    }
    return res.status(404).send("Pokémon no encontrado");
    
    
});

app.listen(process.env.PORT||3000, ()=>{
    console.log("Server is running...");
});