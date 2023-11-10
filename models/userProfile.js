const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:{type: String, required:true},
    value:{type: Number, default:0},
});

const profileSchema = mongoose.Schema({

    user :{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},

    income: {type: Number, required: true},

    limit : {type: Number, required: true},
    
    savings: {type: Number, required: true},

    balance: {type: Number},

    username:{type:mongoose.Schema.Types.String, ref:'User', required: true},

    report: {type: String},

    categories:[categorySchema],
});

profileSchema.set('timestamps', true);


module.exports = mongoose.model ("Profile", profileSchema );
