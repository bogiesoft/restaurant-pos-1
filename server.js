var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var nodeIP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var nodePort = process.env.OPENSHIFT_NODEJS_PORT || 3000;

var connection = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost:27017/pos';
var db = mongoose.connect(connection);

require('./public/server/app.js')(app, mongoose, db);

app.listen(nodePort, nodeIP);