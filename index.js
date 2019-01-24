// const express = require('express');
import express from "express";
const app = express();
const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

// function handleHome(){
//    console.log("Hi. from home!!");
// }

function handleHome(req, res){
//    console.log(req);
   res.send("Hi. from home!!");
}

function handleProfile(req, res){
    res.send("You are on my profile!!");
}

app.get("/profile", handleProfile)
app.get("/", handleHome);
app.listen(PORT, handleListening);
//