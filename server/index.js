const express = require ('express');
const apiRoute = require ('./routes/api');
const bodyParser = require ('body-parser')
const setupTable = require ("./database/setup");
setupTable();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/api', apiRoute)
console.log("listening at 8000")
app.listen('8000');