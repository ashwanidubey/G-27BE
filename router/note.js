const express=require('express')
const noterouter=express.Router();
const {creatnote,deletenote,searchnote}=require('../function/note')           

const {isLogin}=require('../middlware/isLogin')

noterouter.post('/createnote',isLogin,creatnote)
noterouter.get('/deletenote',isLogin,deletenote)
noterouter.get('/searchnote',isLogin,searchnote)

module.exports={noterouter}