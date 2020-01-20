var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Trainstogo1@",
    database: "employeetracker_DB"
});


connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});


function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Add departments",
                "Add roles",
                "Add employees",
                "View departments",
                "View roles",
                "View employees",
                "Update employee roles"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Add departments":
                    addDepartments();
                    break;

                case "Add roles":
                    addRoles();
                    break;

                case "Add employees":
                    addEmployees();
                    break;

                case "View departments":
                    viewDepartments();
                    break;

                case "View roles":
                    viewRoles();
                    break;

                case "View employees":
                    viewEmployees();
                    break;

                case "Update employee roles":
                    updateEmployeeRoles();
                    break;
            }
        });
}

function addDepartments() {
    inquirer
        .prompt({
            type: "input",
            name: "department",
            message: 'What is the name of the department?'
        })
        .then((function (answer) {
            console.log(answer);
            var query = "INSERT INTO departments (department_name) VALUES ?";
            var values = [[answer.department]]
            connection.query(query, [values], function (err, res) {
                console.log(res);
                runSearch();
            });
        }))
}

function addRoles() {
    var query = "SELECT department_name as name, id as value FROM departments";
    connection.query(query, function (err, departments) {
        inquirer
            .prompt([{
                type: "input",
                name: "title",
                message: 'What is the role title?'
            },
            {
                type: "input",
                name: "salary",
                message: 'What is the salary?'
            },
            {
                type: "list",
                name: "departmentId",
                message: "What is the department name?",
                choices: departments
            }
            ])
            .then((function (answer) {
                console.log(answer);
                var query = "INSERT INTO roles (title,salary,department_id) VALUES ?";
                var values = [[answer.title, answer.salary, answer.departmentId]]
                connection.query(query, [values], function (err, res) {
                    console.log(res);
                    runSearch();
                });
            }))
    });
}

function addEmployees() {
    var query = "SELECT title as name, id as value FROM roles";
    connection.query(query, function (err, roles) {
        inquirer
            .prompt([{
                type: "input",
                name: "firstName",
                message: 'What is the first name?'
            },
            {
                type: "input",
                name: "lastName",
                message: 'What is the last name?'
            },
            {
                type: "list",
                name: "roleId",
                message: "What is the role title?",
                choices: roles
            }
            ])
            .then((function (answer) {
                console.log(answer);
                var query = "INSERT INTO employees (first_name,last_name,role_id) VALUES ?";
                var values = [[answer.firstName, answer.lastName, answer.roleId]]
                connection.query(query, [values], function (err, res) {
                    console.log(res);
                    runSearch();
                });
            }))
    });
}

function viewDepartments() {
    var query = "SELECT * FROM departments";
    connection.query(query, function (err, res) {
        console.table(res);
        runSearch();
    });
}

function viewRoles() {
    var query = "SELECT * FROM roles";
    connection.query(query, function (err, res) {
        console.table(res);
        runSearch();
    });
}

function viewEmployees() {
    var query = "SELECT * FROM employees";
    connection.query(query, function (err, res) {
        console.table(res);
        runSearch();
    });
}

function updateEmployeeRoles() {
    var query = "SELECT * FROM roles";
    connection.query(query, function (err, res) {
        console.table(res);
        runSearch();
    });
}