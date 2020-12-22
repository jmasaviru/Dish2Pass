-- Drops the database if it exists currently --
DROP DATABASE IF EXISTS dish2pass_db;

-- Creates the "dish2pass_db" database --
CREATE DATABASE dish2pass_db;

-- Makes the following code affect dish2pass_db --
USE dish2pass_db;

-- Creates the table "users" within dish2pass_db --
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NULL,
  pswd VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

-- Creates the table "recipes" within dish2pass_db --
CREATE TABLE recipes (
  id INT NOT NULL AUTO_INCREMENT,
  recipes VARCHAR(45) NULL,
  PRIMARY KEY (id)
);