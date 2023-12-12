//npm i express mongoose dotenv
require('dotenv').config()
const express=require('express')
const {router}=require('./router/router')
const {connectToMongo}=require('./db')
const app=express();
const port=process.env.PORT;
connectToMongo()
app.use(express.json())
app.use(router);
//http://localhost:3000/hii

app.listen(port,()=>{
    console.log("app started ")
})