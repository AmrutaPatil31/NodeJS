const express=require('express');
const usermodel=require('../models/user.model');
const authRouter=express.Router()

authRouter.post('/register',async(req,res)=>{
    const {email,name,password}=req.body;

    const user=await usermodel.create({
        email,password,name
    })

    res.status(200).json({
        message:"user registered",
        user
    })
})
module.exports = authRouter;
