const mongoose = require("mongoose");
// const validator = require("validator");
 
const userSchema = mongoose.Schema ({
 
 name: {
    type: String,
    required: true
 }, 

 email:{
    type: String,
    required:[true, 'email required!']
 },

 password : {
    type: String,
    required:true,
    minlegnth: 8,
    unique : true
 },
 });

 userSchema.set('timestamps', true);

 module.exports = mongoose.model("User",userSchema);