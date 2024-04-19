const express=require("express");
const reviewControllers=require('../controllers/reviewController.js');

const reviewRouter=express.Router();

reviewRouter.route('/')
.get(reviewControllers.getAllReview)
.post(reviewControllers.addReview);

reviewRouter.route('/:id')
.put(reviewControllers.replaceReview);

module.exports=reviewRouter;