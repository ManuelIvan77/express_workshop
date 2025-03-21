const express = require('express');
const pokemon= express.Router();
const db= require('../config/database');

pokemon.post("/", (req,res, next) =>{
    return res.status(200).send(req.body);
});

pokemon.get('/', async (req,res,next)=>{
    const pkmn = await db.query("SELECT * FROM pokemon");
    return res.status(200).json(pkmn);
});

pokemon.get('/:id([0-9]{1,3})', (req,res,next)=>{
    const id=req.params.id - 1;
    if (id >=0 && id <= 150) { 
        return res.status(200).send(pk[req.params.id - 1]) 
    }
            
    return res.status(404).send("Pokémon no encontrado");
        
    
    
});

pokemon.get('/:name([A-Za-z]+)',(req,res,next)=>{
    const name=req.params.name;
    /*for(i=0; i<pokemon.length;i++){
        if(pokemon[i].name.toUpperCase() == name.toUpperCase()){
            return res.status(200).send(pokemon[i]);
        }
    }*/

        //Operador Ternario, Concición ? retorno valor si verdadero : retorno valor si falso, se usa cuando queremos que de un If  se 
        // retorne algo
    const pkmn =pk.filter((p)=>{
        return (p.name.toUpperCase()==name.toUpperCase()) && p ;

    });

    /*(pk.length >0) ?  
    res.status(200).send(pk) : 
    res.status(404).send("Pokémon no encontrado");*/

    if(pkmn.length >0) { 
        return res.status(200).send(pkmn); 
    }
    return res.status(404).send("Pokémon no encontrado");
    
    
});

module.exports = pokemon;