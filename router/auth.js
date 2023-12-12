const express=require('express')
const authrouter=express.Router();
const {login,logout,signup}=require('../function/auth')
const {checkCreds}=require('../middlware/checkCreds')                       
authrouter.get('/login',login)
authrouter.get('/logout',logout)
//http://localhost:3000/signup
authrouter.post('/signup',checkCreds,signup)
module.exports={authrouter}