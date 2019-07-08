const express = require('express');
const BodyParser = require('body-parser');

const database = require('./db');
const journals = require('./routes/journals');
const auth = require('./routes/auth');
const media = require('./routes/media');

const app = express();

database.connect((err, connection) => {
  if (err) {
    console.error('Не удалось соединиться с базой данных', err);
    return process.exit(1);
  } else {
    global.database = database;
    startServer();
  }
});

function startServer() {
  app.set('port', process.env.PORT || 8080);

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
  app.use(BodyParser.json());

  //routes
  app.use('/journals', journals);
  app.use('/auth', auth);
  app.use('/media', media);

  //middleware

  app.listen(8080);
}
