DROP DATABASE IF EXISTS Employee_db;
CREATE DATABASE Employee_db;

USE Employee_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name NOT NULL VARCHAR(30),
    last_name Not Null Varchar(30),
    department_id INT,
    role_id INT,
    manager_id INT,
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_id INT,
  role_name NOT NULL VARCHAR(30),
  role_salary NOT NULL DECIMAL,
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE SET NULL
);