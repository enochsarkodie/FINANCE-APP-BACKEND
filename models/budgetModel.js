const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},

    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category', required:true}],

    budgetedAmount: {type: Number, required: true}
});

budgetSchema.set('timestamps', true);

module.exports = mongoose.model('Budget', budgetSchema);