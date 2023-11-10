const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},

    name: {type: String, required: true},

    targetAmount: Number,
})

goalSchema.set('timestamps', true);

module.exports = mongoose.model('Goal', goalSchema);