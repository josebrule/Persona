CREATE DATABASE personas_db;

USE personas_db;

CREATE TABLE personas(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(180),
    birth TIMESTAMP,
    fatherid INT(11),
    motherid INT(11)
    );

DESCRIBE personas;