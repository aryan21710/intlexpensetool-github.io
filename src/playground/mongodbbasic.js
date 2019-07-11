const mongoose=require('mongoose');
mongoose.Promise=global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/EMPDATA', { useNewUrlParser: true });
const empdata=mongoose.model('empData',{
	empname : {
		type : String,
		required : true,
		minlength : 1,
		trim : true
	},

	date : {
		type : String,
		required : true,
		minlength : 1,
		trim : true
	},

	expensedescription : {
        type : String,
		required : true,
		minlength : 1,
		trim : true
	},

	amountininr : {
        type : Number,
		required : true,
    },
    
    amountinus : {
        type : Number,
		required : true,
    },
    
    receiptsandattachment : {
		type : String,
		required : true,
		minlength : 1,
		trim : true
	},

});

const mydata=new empdata (
    {
        empname: 'ARYAN SHARMA',
        date: '22/09/79',
        expensedescription: 'CAB BILL FOR LATE WORKING',
        amountininr: 200,
        amountinus: 3,
        receiptsandattachment: 'http://receipts.com'


    }
)

mydata.save().then((doc)=>{
    console.log('DOCUMENT SAVED:-'+JSON.stringify(doc))
}).catch((err)=>{
    console.log('ERROR OCCURED WHILE SAVING:-'+err)
})