const express = require('express');
const router = express.Router();


const productsController = require('../controllers/products');
const getContactusController = require('../controllers/users');
const postContactusController = require('../controllers/users');
const getSuccessController = require('../controllers/users');
const get404Controller = require('../controllers/users');


router.get('/', productsController.getProducts);

router.get('/contactus', getContactusController.getContactus);

router.post('/contactus', postContactusController.postContactus);

router.get('/success', getSuccessController.getSuccess);

router.get('/', get404Controller.get404);


module.exports = router;