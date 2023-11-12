INSERT INTO departments (department_name)
VALUE
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Gabriel', 'Valencia', 3, NULL),
    ('John', 'doe', 1, 1),
    ('Rose', 'Ortega', 2, NULL);

INSERT INTO roles (role_name, role_salary, department_id)
VALUES
    ('Sales men', 18000, 1),
    ('Engineer', 120000, 2),
    ('Financer', 90000, 3),
    ('Lawyer', 105000, 4);
