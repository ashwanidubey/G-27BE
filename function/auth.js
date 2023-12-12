const {User}=require('../models/User')
const login=async (req,res)=>{
    const {email,password}=req.body
    const user=await User.find({email,password})
    if(user.length>0)
    {
        res.send({status:true,user})
    }
    else{
        res.send({status:false , message: "invalid creds"})
    }
}
const logout=(req,res)=>{
    res.send("hii i am logout")
}
const signup=async (req,res)=>{
    const {name,email,password}=req.body
    const user=await User({name,email,password})
    user.save();
    res.send("hii i am signup")
}

module.exports={login,logout,signup}