const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
    
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

        date: {type: Date, required: true},

        category: { type: String, required: true},

        amount: {type: Number, required: true}
            
})

transactionSchema.set('timestamps', true);

module.exports = mongoose.model("Transaction",transactionSchema);