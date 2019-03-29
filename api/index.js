const express = require('express');
const BodyParser = require('body-parser');

const auth = require('./routes/auth');

const app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(BodyParser.json());

app.use('/auth', auth);

app.listen(3030, () => console.log('Сервер запущен!'));