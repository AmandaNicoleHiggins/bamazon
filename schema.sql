DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    stock_quanity INT(5) NOT NULL,
    product_sales DECIMAL(7,2) NULL,
    PRIMARY KEY (item_id)
    );
    
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES("shampoo" "health & beauty", 7.42, 12, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES("tshirt" "Apparel", 12.50, 30, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES("popcorn", "food", 5.50, 50, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES("Monopoly", "games", 15.99, 80, 200);

