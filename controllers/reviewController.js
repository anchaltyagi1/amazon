//importing the review-model
const reviewModel = require('../models/reviewModels.js');

const getAllReview= async(req,res) => {
   res.send("succeed");
   
}


const addReview = async (req,res)=>{
    try{
    const {_id,...reqData} = req.body;
    const data = await reviewModel.create(reqData);
    console.log(data);

    res.json({
        status:'success',
        results:1,
        data:{
            reviews:data,
        }
    });
}
catch(err){
    res.status(403);
    console.log(err);
    res.json({
        status:'fail',
        message:JSON.stringify(err),
    });
}
}

const replaceReview = async (req,res)=>{
    try{
    const reqId = req.params.id;
    const data = {...req.body,_id: reqId};

    const result = await productModel.findOneAndReplace({_id:reqid},data);
     res.json({
        status:'success',
        data:{
            products:result,
        }
     });
}
catch(err){
    res.status(500);
    res.json({
        status:'fail',
        message:JSON.stringify(err),
    })
}
}

module.exports={
    getAllReview,
    addReview,
    replaceReview,
}