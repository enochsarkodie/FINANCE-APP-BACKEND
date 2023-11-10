const asyncHandler = require("express-async-handler");
const User = require("../models/userModels")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


const registerUser = asyncHandler(async (req,res) =>{
    const {name,email,password,confirmPassword} = req.body;
     
    if(!name || !email || !password){
       return  res.status(400).json({message:"all fields are required to register!"});   
    }
    const userAvailable = await User.findOne({email});
    if (userAvailable){
        
        return res.status(400).json({message:"user already exists"})    
    }

    if (password!==confirmPassword){
        return res.status(400).json({message:"password and confirm password does not match"});
    }

    //Hash password
    try { const hashPassword = await bcrypt.hash(password,10);
    console.log("hashed Password:",hashPassword);
    const user = await User.create({
        name,
        email,
        password: hashPassword,
    });
    console.log(`user created ${user}`);
    
        res.status(201).json({_id:user.id,email:user.email});
}catch (error){
    console.error(error);
    res.status(400).json({message:"User data is not valid"})
}});


// user login

const loginUser = asyncHandler(async (req,res) =>{
   const {email, password} = req.body;
   if(!email || !password){
    res.status(400).json({message:"all fields required!"});
    return;
   }

   const user = await User.findOne({email});

   if (user && (await bcrypt.compare(password, user.password))){
    const accessToken = jwt.sign({
        user:{
            name : user.name,
            email: user.email,
            id: user.id,
        },
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: '15m'}
    );
    res.status(200).json({accessToken});
   } else{
    res.status(401).json({message:"email or password is not valid"});
   }
});



const currentUser = asyncHandler(async (req,res) =>{
    res.json(req.user );
});

module.exports = {registerUser,loginUser,currentUser}