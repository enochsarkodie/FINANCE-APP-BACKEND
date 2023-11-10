const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const Transaction = require("../models/transactionModel");

const getTransactions = asyncHandler(async (req,res) =>{
    const transactions = await Transaction.find({user: req.user.id})
    res.status(200).json(transactions)
});

const createTransaction = asyncHandler(async (req,res) =>{
    console.log("The request body:", req.body)
    const {date, category, amount} = req.body;
    if (!date || !category || !amount){
        res.status(400).json({message:"all fields required for transactions"})
    }

    const newTransaction = await Transaction.create({
        date,
        category,
        amount,
        user: req.user.id,
    });
    res.status(201).json(newTransaction)
});

const getTransaction = asyncHandler(async (req,res) =>{
    const transaction = await Transaction.findById(req.params.id)
    if (!transaction){
        res.status(400).json({message:"no transaction found"})
    }
    res.status(200).json(transaction)
});

const deleteTransaction = asyncHandler(async(req,res) =>{
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
        res.status(400).json({message:"no transaction found"})
    }

    if(transaction.user.ToString() !== req.user.id){
        res.status(403).json({message:"not authorized"})
    }
    res.status(200).json(transaction)
});


module.exports = {getTransactions, createTransaction, getTransaction, deleteTransaction};