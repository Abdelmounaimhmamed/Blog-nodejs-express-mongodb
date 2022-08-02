const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    text : {
        type : String,
        required : true
    },
    birth : {
        type : String,
        required : true
    },
    comment : {
        type : String,
        required : true
    }
});

module.exports =  mongoose.model("contactshema" , contactSchema);