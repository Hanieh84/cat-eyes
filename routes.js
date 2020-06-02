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

// pass a buffer or a path to a xml file
xmlReader.parseString(fs.readFileSync(FILE), function(err, data) {
    userName = data.Library.user;
    userPassword = data.Library.password;
    userHost = data.Library.host;
    userDatabase = data.Library.database;
});

// Starting our app.
const app = express();

let connection = mysql.createPool({
    "user": userName.toString(),
    "password": userPassword.toString(),
    "database": userDatabase.toString(),
    "host": userHost.toString()
});

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
// Connecting to the database.
    connection.getConnection(function (err, connection) {
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * FROM like_stories', function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;
            res.header('Access-Control-Allow-Origin', '*');
            console.log(results);
            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

// Starting our server.
app.listen(4000, () => {
    console.log('Go to http://localhost:4000/users so you can see the data.');
});
