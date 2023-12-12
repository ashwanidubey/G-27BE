const express=require('express')
const router=express.Router();

const {authrouter}=require('./auth')  
const {noterouter}=require('./note')    
                 
router.use(noterouter)
router.use(authrouter)


module.exports={router}