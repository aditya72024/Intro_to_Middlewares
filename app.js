const http = require('http');
const express = require('express'); 
const app = express();
app.use((req,res,next) => {
    console.log("I'm in a middleware");
    next();
})


app.use((req,res,next) => {
    console.log("I'm in aother middleware");
    res.send("{ key1: value }")
})

app.listen(1500);