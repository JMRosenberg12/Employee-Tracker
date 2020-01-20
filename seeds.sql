USE employeetracker_DB;
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');

USE employeetracker_DB;
SELECT * FROM department;

USE employeetracker_DB;
INSERT INTO role (title, salary, department_id) VALUES ('Sales Lead', '100000', '1');
INSERT INTO role (title, salary, department_id) VALUES ('Sales Person', '80000', '1');
INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', '150000', '2');
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', '120000', '2');
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', '125000', '3');
INSERT INTO role (title, salary, department_id) VALUES ('Legal Team Lead', '250000', '4');
INSERT INTO role (title, salary, department_id) VALUES ('Lawyer', '190000', '4');

USE employeetracker_DB;
SELECT * FROM role;


USE employeetracker_DB;
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jacob', 'Rosenberg', '1', '1');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Eric', 'Idle', '2', '1');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Ringo', 'Starr', '3', '3');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Casey', 'Kasem', '4', '3');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jimmy', 'Durante', '6', '5');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Pooh', 'Bear', '7', 'NULL');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Twilight', 'Sparkle', '8', '7');

USE employeetracker_DB;
SELECT * FROM employee;