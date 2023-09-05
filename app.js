const http = require('http');
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req,res,next) => {
    console.log("This always run!");
    next();
})


app.use('/add-product',(req,res,next) => {
    console.log("Add Product");
    res.send("<form action='/product' method='POST'><input type='text' name='title' placeholder='Product'><input type='text' name='Size in inch' placeholder='size'><button type='submit'>Submit</button></form>");
})

app.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect("/");
})

app.use('/',(req,res,next) => {
    console.log("Home");
    res.send("<h1>Home</h1>")
})

app.listen(1500);
