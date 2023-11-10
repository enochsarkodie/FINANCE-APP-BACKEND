const { default: mongoose } = require("mongoose")




const categorySchema = mongoose.Schema({
    name:{type: String, required:true},
    value:{type: Number, default:0},
});


module.exports = mongoose.model("Category", categorySchema);