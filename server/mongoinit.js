const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empSchema = new Schema({
    empname:String,
    receiptsandattachment:String,
    date:String,
    amountininr:Number,
    amountinus:Number,
    expensedescription:String
 });

 module.exports = mongoose.model('empdata', empSchema);          

