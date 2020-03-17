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

connection.connect(function (err) {
    if (err) throw err;
    welcometoBamazon();
});

// Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.

function welcometoBamazon() {
    // call the data from the products table in the bamazon database
    connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;

    inquirer.prompt([
        // what item to purchase
        {
        name: "choice",
        type: "rawlist",
        choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].product_name + " " + "$" + results[i].price);
            }

            return choiceArray;
        },
        message: "What is the ID of the item you would like to purchase?"
    },
    // how many
        {
        name: "howMany",
        type: "input",
        message: "How many would you like?",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
    }
    ])
    .then(function(answer) {
            connection.query("SELECT * FROM products", function(err, results) {
                if (err) throw err;
  
    var chosenItem;
    for (var i = 0; i < results.length; i++) {
        if ((results[i].product_name + " " + "$" + results[i].price)  === answer.choice) {
            chosenItem = results[i];
        }
    }
    // how many they want to buy vs stock left

    // if in stock
    if (chosenItem.stock_quantity >= parseInt(answer.howMany)) {
    // update the stock quantity in the database
    connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: (chosenItem.stock_quantity - parseInt(answer.howMany))
      },
      {
        item_id: chosenItem.item_id
      }
    ],
    function(error) {
      if (error) throw err;
      // Tell user that the order was successful...
      console.log("Order placed. Your order costs: $" + (chosenItem.price * answer.howMany));
      // Go back to beginning
      welcomeToBamazon();
    }
  );
}
else {
  // Stock wasn't high enough :(
  console.log("Sorry we don't have enough items. Try again...");
  // restart!
  welcomeToBamazon();
}
});
});
    });
}