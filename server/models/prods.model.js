const mongoose = require('mongoose');

const ProdSchema = new mongoose.Schema({
    /* id: {
        type: Number,
        required: [true],
        minlength: [1, "Id is required"]

    },*/
    title: {
        type: String,
        required : [true, "Title is required"],
        minlength : [3, "Title must be atleast 10 characters"]

    },
    price : {
        type: Number,
        required : [true, "Price is required"],
        minlength : [1, "Price must be atleast 1 dollar"]
        
    },

    description : {
        type: String,
        required : [true, "Description is required"],
        minlength : [3, "Description must be atleast 3 characters"]
        
    }

}, {timestamps:true});

const Prod = mongoose.model('Prod', ProdSchema)
module.exports = Prod
