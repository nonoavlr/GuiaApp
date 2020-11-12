const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.listen('5000', ()=> console.log('Server on port 5000'));

