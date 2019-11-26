const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "product",
        required : true
    },
    qty : {
        type : Number,
        default : 1
    },
    date : {
        type : Date,
        default : Date.now
    },

});

module.exports = mongoose.model("order", orderSchema);