const express=require("express");
const productsControllers=require('../controllers/productsControllers.js');

const productRouter=express.Router();

productRouter.route('/')
.get(productsControllers.getAllProducts)
.post(productsControllers.addProduct);

productRouter.route('/:id')
.put(productsControllers.replaceProduct);

module.exports=productRouter;