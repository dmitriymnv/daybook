const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'db4free.net',
	port: '3306',
	user: 'dmitriymnv',
	database: 'daybook', 
	password: 'testdaybook'
});

module.exports = connection;
