const userModel=require('../models/user.model');
const bcrypt=require("bcryptjs");
const jwt=require('jsonwebtoken');

async function registerController(req,res){
    const {username,email,password,bio,ProfileImage}=req.body;
    const isUserExists=await userModel.findOne({
        $or:[
                {username},
                {email}
            ]
    })
    if(isUserExists){
        return res.status(400).json({
            message:"user already exist"+(isUserExists.email==
                email ?" Email already exists ":" username already exists "
            )
        })
    }

    const hash=crypto.createHash('sha256').update(password).digest('hex');

    const user=await userModel.create({
        username,
        email,
        bio,
        ProfileImage,
        password: hash
    })

    const token=jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"1d"
        }
    )

    res.cookie('token',token);

    res.status(201).json({
        message:"user registerd successfully",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            ProfileImage:user.ProfileImage
        }
    })
}

async function loginController(req,res){
    const {username,email,password}=req.body;

    const user=await userModel.findOne({
        $or:
        [
            {
                username:username
            },
            {
                email:email
            }
        ]
    })
    if (!user) {
    return res.status(404).json({
        message: "User not found"
    });
}

    // const hash = crypto.createHash('sha256').update(password).digest('hex');
    const hash = bcrypt.hash(password,10);


     if (user.password !== hash) {
        return res.status(401).json({
            message: "Invalid password"
        });
    }

     const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.cookie("token",token)

    res.status(200).json(
        {
            message:"user loggedIn successfully",
            user:{
                username:user.username,
                email:user.email,
                bio:user.email,
                profileImage:user.ProfileImage
            }
        }
    )
}

module.exports={
    registerController,
    loginController
}