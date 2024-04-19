const express=require('express');
const productRouter=require('./routes/productsRoutes.js');
const reviewRouter=require('./routes/reviewRoutes.js');
const mongoose=require('mongoose');
const test=require('./models/productsModel.js')
const test1=require('./models/reviewModels.js')
const app=express();
const port=1400;
app.use(express.json());
app.use('/api/products',productRouter);
app.use('/api/reviews',reviewRouter);

const url='mongodb+srv://$username$:$password$@cluster0.9tnmekc.mongodb.net/$_db_name_$?retryWrites=true&w=majority&appName=Cluster0'

const databaseUser='anchaltyagi';
const databasePassword='mongo123';
const databaseName='Amazon';
let dbLink=url.replace("$username$",databaseUser);
dbLink=dbLink.replace("$password$",databasePassword);
dbLink=dbLink.replace("$_db_name_$",databaseName);

mongoose.connect(dbLink)
  .then(() => console.log('-----------Connected!----------'));


app.listen(port,()=>console.log("--------app started----------"));