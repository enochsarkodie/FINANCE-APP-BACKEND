const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    
    accountType: String,

    balance: Number,
});
 
accountSchema.set('timestamps', true);

module.exports = mongoose.model("Account", accountSchema)