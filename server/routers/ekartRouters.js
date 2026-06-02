//?Import and extracting in different ways
// const express = require('express');
// express.Router()
// const productObj = require('../controller/controller');
// let {addProduct} = productObj

//?----------------------------------------------------
const {Router} = require('express')
const {addProduct , getAllProducts , getSingleProduct , deleteOneProduct} = require('../controller/controller')


const ekartRouter = Router();

ekartRouter.post('/ekart' , addProduct)
ekartRouter.get('/ekart' , getAllProducts)
ekartRouter.get('/ekart/:id' , getSingleProduct)
ekartRouter.delete('/ekart/:id' , deleteOneProduct)

module.exports = ekartRouter