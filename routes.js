const express = require('express');
const mysql = require('mysql');

let userName = "";
let userPassword = "";
let userHost = "";
let userDatabase = "";

'use strict';

var fs = require('fs'),
    path = require('path'),
    xmlReader = require('xml2js');

var FILE = path.join(__dirname, './src/Files/User.xml');

xmlReader.parseString(fs.readFileSync(FILE), function(err, data) {
    userName = data.Library.user;
    userPassword = data.Library.password;
    userHost = data.Library.host;
    userDatabase = data.Library.database;
});

const app = express();

let connection = mysql.createPool({
    "user": userName.toString(),
    "password": userPassword.toString(),
    "database": userDatabase.toString(),
    "host": userHost.toString()
});

app.get('/users', function (req, res) {
    connection.getConnection(function (err, connection) {
        connection.query('SELECT * FROM like_stories', function (error, results, fields) {
            if (error) throw error;
            res.header('Access-Control-Allow-Origin', '*');
            res.send(results)
        });
    });
});

app.listen(4000, () => {
    console.log('Go to http://localhost:4000/users so you can see the data.');
});
