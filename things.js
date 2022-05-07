const express = require('express')
const app = express();
const path = require('path');
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname)+"/index.html");
})
app.post('/data', urlencodedParser,  (req, res) => {
   res.send('welcome, ' + req.body.pragya)
 })

module.exports = app;