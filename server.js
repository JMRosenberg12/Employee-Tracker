// Build a command-line application that at a minimum allows the user to:
//   * View departments, roles, employees.
//   * Add departments, roles, employees.
//   * Update employee roles.


const inquirer = require("inquirer");
const mysql = require("mysql");
const consoletable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Trainstogo1@",
    database: "employeetracker_DB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    starter();
  });

//__________________________________________________________

function starter() {
    inquirer
        .prompt([
            
            {
                name: "action",
                type: "list",
                message: "What would you like to do?",
                choices: [
                    "View departments",
                    "view employees",
                    "view roles",
                    "Add a department",
                    "Add an employee",
                    "Add a role",
                    "Update an employee's role",
                    "Exit" 
                ]
            }
        ])
        
        .then(function(answer) {
            switch (answer.action) {
            case "View departments":
                viewdpartments();
                break;

            case "view employees":
                viewEmployees();
                break;

            case "view roles":
                viewroles();
                break;

            case "Add a department":
                addDepartment();
                break;

            case "Add an employee":
                addEmployee();
                break;

            case "Add a role":
                addRole();
                break;

            case "Update an employee's role":
                updateEmployeeRole();
                break;
            
            case "Exit":
                connection.end();
                break;
            }
        })


}

//__________________________________________________________
function viewdpartments(){
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        starter();
    })
    //id
    //department_name
};

function viewroles(){
    var query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        starter();
    })
};

function viewEmployees(){
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        starter();
    })
};

function addEmployee(){
     inquirer
        .prompt([
            
            {
        
                message: "What is your name?",
                name: "departmentname"
            }
            
            
        ])
        .then(function(answers){
            console.log(answers)
        })
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        starter();
    });
}
function addDepartment(){

        
        inquirer
        .prompt([
            
            {
        
                message: "What is your name?",
                name: "departmentname"
            }
            
            
        ])
        .then(function(answers){
            console.log(answers)
        })
        var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        starter(); 
         
    });
}
        



function addRole(){
    inquirer
    .prompt([
        
        {
    
            message: "What is your name?",
            name: "departmentname"
        }
        
        
    ])
    .then(function(answers){
        console.log(answers)
    })
   
    var query = "SELECT * FROM employee";
connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    starter(); 
});
}
    

//__________________________________________________________

function updateEmployeeRole(){};