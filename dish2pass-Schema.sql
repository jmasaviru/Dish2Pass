-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS dish2pass_db;

-- Creates the "dish2passDB" database --
CREATE DATABASE dish2pass_db;

-- Makes it so all of the following code will affect dish2passDB --
USE dish2pass_db;

-- Creates the table "users" within dish2passDB --
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NULL,
  pswd VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

-- Creates the table "recipes" within dish2passDB --
CREATE TABLE recipes (
  id INT NOT NULL AUTO_INCREMENT,
  recipes VARCHAR(45) NULL,
  PRIMARY KEY (id)
);