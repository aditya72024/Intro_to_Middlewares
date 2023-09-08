const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next) => {
    console.log("Add Product");
    res.send("<form action='admin/product' method='POST'><input type='text' name='title' placeholder='Product'><input type='text' name='Size in inch' placeholder='size'><button type='submit'>Submit</button></form>");
})

router.post('admin/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;

