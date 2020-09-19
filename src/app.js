const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/init');
const authorsRoute = require('./api/routes/authors');
const booksRoute = require('./api/routes/books');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(config.cors);

app.use('/authors', authorsRoute);
app.use('/books', booksRoute);

module.exports = app;