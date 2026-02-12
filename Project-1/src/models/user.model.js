const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        unique:[true,"user name already exists"],
        required:[true,"user name is required"]
    },
    email:{
        type:String,
        unique:[true,"email already exists"],
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    bio:String,
    ProfileImage:{
        type:String,
        default:"https://ik.imagekit.io/7h8qp7u0l/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp"
        
    }
    
})

const userModel=mongoose.model("users",userSchema);
module.exports=userModel;