//?Import and extracting in different ways
// const express = require('express');
// express.Router()
// const productObj = require('../controller/controller');
// let {addProduct} = productObj

//?----------------------------------------------------
const {Router} = require('express')
const {addProduct} = require('../controller/controller')


const ekartRouter = Router();

ekartRouter.post('/ekart' , addProduct)

module.exports = ekartRouter