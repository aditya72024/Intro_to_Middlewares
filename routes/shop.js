const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

router.get('/contactus',(req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
})

router.post('/contactus',(req,res,next) => {
    console.log(req.body);
    res.redirect("/success");
})

router.get('/success',(req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
})

module.exports = router;