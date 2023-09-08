-- Database: admisight

-- DROP DATABASE IF EXISTS admisight;

CREATE DATABASE proj_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- SCHEMA: usr

-- DROP SCHEMA IF EXISTS usr ;

CREATE SCHEMA IF NOT EXISTS usr
    AUTHORIZATION postgres;

-- User table 

CREATE TABLE usr.user (
    ID serial PRIMARY KEY,
    USERNAME VARCHAR(50) NOT NULL,
    FIRSTNAME VARCHAR(100) NOT NULL,
    LASTNAME VARCHAR(100) NOT NULL,
    EMAIL VARCHAR(100) NOT NULL,
    PASSWORD VARCHAR(100) NOT NULL,
    CREATED_ON TIMESTAMP DEFAULT NOW()
);

-- Seed Random Data

INSERT INTO usr.users (USERNAME, FIRSTNAME, LASTNAME, EMAIL, PASSWORD)
VALUES
  ('user1', 'John', 'Doe', 'user1@example.com', 'password1'),
  ('user2', 'Jane', 'Smith', 'user2@example.com', 'password2'),
  ('user3', 'Alice', 'Johnson', 'user3@example.com', 'password3'),
  ('user4', 'Bob', 'Brown', 'user4@example.com', 'password4'),
  ('user5', 'Eva', 'Wilson', 'user5@example.com', 'password5'),
  ('user6', 'David', 'Lee', 'user6@example.com', 'password6'),
  ('user7', 'Sarah', 'Davis', 'user7@example.com', 'password7'),
  ('user8', 'Michael', 'Harris', 'user8@example.com', 'password8'),
  ('user9', 'Olivia', 'Martin', 'user9@example.com', 'password9'),
  ('user10', 'William', 'White', 'user10@example.com', 'password10');
