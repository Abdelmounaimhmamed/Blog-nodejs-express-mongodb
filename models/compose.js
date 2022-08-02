const mongoose = require("mongoose");
const composeSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    textCompose : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model("ComposeSchema", composeSchema);