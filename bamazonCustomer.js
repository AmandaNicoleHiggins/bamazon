// include required packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// onnection for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    
    port: 3306,
    
    user: "root",
    password: "01012Dog",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;