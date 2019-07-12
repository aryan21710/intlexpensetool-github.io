const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empSchema = new Schema({
    empname:String,
    receiptlocation : String,
    // receiptsandattachment:{contentType: String, data: Buffer},
    date:String,
    amountininr:Number,
    amountinus:Number,
    expensedescription:String
 });

 module.exports = mongoose.model('empdata', empSchema);          

