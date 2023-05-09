var express = require('express');
var path=require('path');
var app = express();

//server configuration
app.use(express.static(path.join(__dirname,'Public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/index.html'));
 });

 app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/Home.html'));
 });

 app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/Login.html'));
 });

 app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/Registration.html'));
 });

 app.use(express.static(path.join(__dirname,'Scripts')));

 app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/app.js'));
 });

var server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://localhost:8888", host, port)
});

  