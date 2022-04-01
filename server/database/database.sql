CREATE DATABASE ng_persona_db;

USE ng_persona_db;

CREATE TABLE persona(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(180),
    birth TIMESTAMP,
    fatherid INT(11),
    motherid INT(11)
    );

DESCRIBE persona;