const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
   userName:{
    type:String,
    unique:true,
    required:true
   },

    phoneNo:{
        type:Number,
        required:true
    },

    rating:{
        type:String,
        required:true
    },
    

    productId:{
        type:String,
        required:true,
        unique:true
    },
   
  
   
})

const reviewModel = mongoose.model('reviews',ReviewSchema);

module.exports=reviewModel;

// const testProduct = new productModel({
//     title:'titan watch',
//     price:1000,
// });

// testProduct.save().then((res)=>
// console.log(res));