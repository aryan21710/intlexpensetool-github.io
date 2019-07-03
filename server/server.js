const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'..');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
console.log('PUBLICPATH:-' + publicPath);

app.get('/', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/about', (req, res) => {
	console.log('req:-' + JSON.stringify(req));
	res.send('WELCOME TO ABOUT PAGE');
});

app.listen(port, () => {
	console.log('SERVER LISTENING ON:-' + port);
});
