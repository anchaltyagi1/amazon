//importing the product-model
const productModel = require('../models/productsModel.js');

const getAllProducts = async(req,res) => {
    const{sort='price',page=1,pageSize=3,...q} =req.query;
    const sortStr=sort.split(',').join(' ');

    let query = productModel.find(q);
    query=query.sort(sortStr);

    const skip=pageSize*(page-1);
    const limit=3;
  query=query.skip(skip).limit(pageSize);
  query=query.select('title');



    const products=await query;
    // console.log(products);
    // console.log(data);
    // console.log(req.url);
    const  totalResults=await productModel.countDocuments();
    res.json({
        status:'success',
        results:products.length,
        totalResults:totalResults,
        pageSize:pageSize,
        page:page,
        data:{
            products,
        }
    })
}


const addProduct = async (req,res)=>{
    try{
    const {_id,...reqData} = req.body;
    const data = await productModel.create(reqData);
    console.log(data);
    res.json({
        status:'false',
        results:1,
        data:{
            products:data,
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

const replaceProduct = async (req,res)=>{
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
    getAllProducts,
    addProduct,
    replaceProduct,
}


















//...e it will hold all other value which is discarded
//...rest