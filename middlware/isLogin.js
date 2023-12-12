const isLogin=(req,res,next)=>{
    //res.send("not login")
   next();
}

module.exports={isLogin}