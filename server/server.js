const path = require('path');
const publicPath = path.join(__dirname,'..');
const port = process.env.PORT || 3000;
const util=require('util');
const cors = require('cors');
const multer = require('multer')
const fs=require('fs')



const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const empdata=require('./mongoinit')

mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/EMPDATA', { useNewUrlParser: true });
const app = express();
app.use(express.static(publicPath));
app.use(cors())
console.log('PUBLICPATH:-' + publicPath);



// THE BODY DATA WHICH IS SENT BY CLIENT USING REQUEST OBJ WILL BE FETCHED BY BODYPARSER IN JSON FORMAT.
// here bodyparser is a middleware. THE JSON DATA WILL BE AVAILABLE INSIDE THE POST METHOD.

// bodyparser parses the HTTP request body. This is usually necessary when you need to know more than just
// the URL being hit,more specifically in the context of a POST, PATCH or PUT HTTP request where the
// information you want is contained in the body.Using body parser allows you to access req.body 
// from within your routes, and use that data for example to create a user in a database.
app.use(bodyParser.json());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
  })

  var upload = multer({ storage: storage }).array('file')
  let receiptsandattachment=''


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





app.post('/getdata', (req, res) => {
	console.log('req:-' + util.inspect(req.body.empData));

	const mydata=new empdata (
		{
			empname: req.body.empData.name,
			date:  req.body.empData.createdAt,
			expensedescription:  req.body.empData.text,
			amountininr:  req.body.empData.amount,
			amountinus:  (req.body.empData.amount/70).toFixed(2),
			receiptlocation: 'Click to View the Receipt',
			// receiptsandattachment:  receiptsandattachment
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

app.get('/getreceipt', (req, res) => {
	console.log('REQUEST FROM ADMIN REACT COMPONENT RECEIVED TO FETCH RECEIPT');
	console.log('http://'+publicPath+'/dummy.png')
	res.redirect('/dummy.png');


});

app.get('/about', (req, res) => {
	res.send('about.html');


});

app.post('/upload',function(req, res) {
    
    upload(req, res, function (err) {
     
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
          // A Multer error occurred when uploading.
        } else if (err) {
            return res.status(500).json(err)
          // An unknown error occurred when uploading.
		} 
		console.log('FILE ON SERVER:-'+util.inspect(req.files));
		// var img = fs.readFileSync(req.files[0].path);
		// var encode_image = img.toString('base64');
		// // Define a JSONobject for the image attributes for saving to database
		 
		// receiptsandattachment = {
		// 	 contentType: req.files[0].mimetype,
		// 	 data:  new Buffer(encode_image, 'base64')
		//   };

	
        return res.status(200).send(req.files)
        // Everything went fine.
      })
});





app.listen(port, () => {
	console.log('SERVER LISTENING ON:-' + port);
});
