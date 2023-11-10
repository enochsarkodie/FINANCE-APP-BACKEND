 const asyncHandler = require("express-async-handler");
 const User = require("../models/userModels");
 const Account = require("../models/accountModel");

 const getAccounts = asyncHandler(async(req, res) => {
    const accounts = await Account.find({user: req.user.id})
    res.status(200).json(accounts)
 });

//  const createAccount = asyncHandler (async(req, res) => {
//     console.log("The request body is:", req.body)
//     const {name,email,password} = req.body;
//     if (!name || !email || !pa){
//     res.status(400);
// throw new Error ("All field required");}
// const newUser = await Account.create({
//     name,
//     email,
//     password,
//     user: req.user.id,
// });
//     res.status(201).json(newUser)
//  });

//  const getAccount =asyncHandler( async (req, res) => {
//     const account = await Account.findById(req.params.id);
//     if (!account){
//         res.status(404);
//     }
//     res.status(200).json(user);
//  });

//  const updateAccount = asyncHandler(async(req, res) => {
//     const account = await Account.findById(req.params.id);
//     if (!account){
//         res.status(404);
//         throw new Error("user not found");
//     }
//     const updatedContact = await User.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new: true}
//     )
//     res.status(200).json(updatedContact)
//  })

//  const deleteUser = asyncHandler(async(req, res) => { 
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user){
//         res.status(404);
//         throw new Error("user not found");
//     }
//     res.status(200).json(user)
    
//  })
 


  module.exports = {getAccounts,createUser,getUser,updateUser,deleteUser};