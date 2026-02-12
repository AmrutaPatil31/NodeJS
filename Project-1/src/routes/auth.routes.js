const express=require('express');
const authRouter=express.Router();
const authController=require("../controller/auth.controller");


// authRouter.post('/register',async(req,res)=>{
//     const {username,email,password,bio,ProfileImage}=req.body;

//     const isUseExistsByEmail=await userModel.findOne({email});

//     if(isUseExistsByEmail){
//         return res.status(409).json({
//             message:"user already exists with same email",
//         });
//     }

//     const isUseExistsByUsername=await userModel.findOne({username});

//     if(isUseExistsByUsername){
//         return res.status(409).json({
//             message:"user already exists with same username",
//         });
//     }
// })

authRouter.post("/register",authController.registerController);

authRouter.post('/login',authController.loginController);
module.exports = authRouter;
