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