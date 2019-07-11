const path = require('path');
const publicPath = path.join(__dirname,'..');
const port = process.env.PORT || 3000;
const util=require('util');


const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const empdata=require('./mongoinit')

mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/EMPDATA', { useNewUrlParser: true });
const app = express();
app.use(express.static(publicPath));
console.log('PUBLICPATH:-' + publicPath);



// THE BODY DATA WHICH IS SENT BY CLIENT USING REQUEST OBJ WILL BE FETCHED BY BODYPARSER IN JSON FORMAT.
// here bodyparser is a middleware. THE JSON DATA WILL BE AVAILABLE INSIDE THE POST METHOD.

// bodyparser parses the HTTP request body. This is usually necessary when you need to know more than just
// the URL being hit,more specifically in the context of a POST, PATCH or PUT HTTP request where the
// information you want is contained in the body.Using body parser allows you to access req.body 
// from within your routes, and use that data for example to create a user in a database.
app.use(bodyParser.json());

app.post('/login', (req, res) => {
	const user = {
		uname: req.body.user.email,
		passwd: req.body.user.passwd
	};
	// console.log('req.body:-'+util.inspect(req));
	console.log(` the username :- ${user.uname} & passwd :- ${user.passwd}`);
	if (user.uname.split('@')[0]==="admin") {
	res.status(200).send('admin user authenticated successfully by server');
	} else if (user.uname.split('@')[0]==="aryan"){
	res.status(200).send('aryan user authenticated successfully by server');
	} else {
		res.status(400).send('USER DOES NOT EXIST IN DB');
	}
});



app.post('/files', (req, res) => {
	console.log('req:-' + JSON.stringify(req.body));
	res.send('FILES UPLOADED TO SERVER');
});


app.post('/getdata', (req, res) => {
	console.log('req:-' + util.inspect(req.body.empData));

	const mydata=new empdata (
		{
			empname: req.body.empData.name,
			date:  req.body.empData.createdAt,
			expensedescription:  req.body.empData.text,
			amountininr:  req.body.empData.amount,
			amountinus:  req.body.empData.amount/70,
			receiptsandattachment:  'NOT ATTACHED'
		}
	)
	mydata.save().then((doc)=>{
		console.log('DOCUMENT SAVED:-'+JSON.stringify(doc))
		res.status(200).send('DATA SAVED ON MONGO SERVER');

	}).catch((err)=>{
		console.log('ERROR OCCURED WHILE SAVING:-'+err)
	})
});

app.get('/getdata', (req, res) => {
	console.log('REQUEST FROM ADMIN REACT COMPONENT RECEIVED TO FETCH DATA');
	const mydata=new empdata()
	empdata.find({}).then((doc)=>{
		console.log('FOUND DOCUMENT IN DB USING FIND METHOD  :-'+JSON.stringify(doc))
		res.status(200).send(JSON.stringify(doc));

	}).catch((err)=>{
		console.log('NOT ABLE TO FETCH DOCUMENT FROM DB:-'+err)

	})

});



app.listen(port, () => {
	console.log('SERVER LISTENING ON:-' + port);
});
