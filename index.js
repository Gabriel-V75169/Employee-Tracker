const mysql = require ("mysql2");
const inquirer = require ("inquirer");

const departmentsArray = [];
const employeeArray = [''];
const rolesArray = [];


const db = mysql.createConnection(
    {
      host: "localhost",
      user: "prcess.env.DB_User",
      password: "process.env.DB_PASSWORD",
      database: "process.env.DB_NAME",
    },
    console.log(`Connected to the database.`)
  );

  

  function init () {
    inquirer.prompt([
        {
            type: "list",
            message: "What are you doing today ?",
            name: "action",
            choices: [
                "View all Departments", 
                "Add Department", 
                "View all Employees", 
                "Add an Employee",
                "Update Employee's Role",
                "View all Roles",
                "Add Role",
                "Quit"
            ]
        }
    ])
    .then((data) => {

        if(data.action === "View all Departments"){
            viewAllDepartments();
        }else if(data.action === "Add Department"){
            addDepartment();
        }else if(data.action === "View all Employees"){
            viewAllEmployees();
        }else if(data.action === "Add an Employee"){
            addEmployee();
        }else if(data.action === "Update Employee's Role"){
            updateEmployee();
        }else if(data.action === "View all Roles"){
            viewAllRoles();
        }else if(data.action === "Add Role"){
            addRole();
        }else if(data.action === "Quit"){
            process.exit();
        }
    });
  };

  async function viewAllDepartments() {
    const departments = await db.promise().query(`SELECT * FROM departments`);
    console.table(departments);
  };

  async function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: "What is the name of the department ?",
        }
    ]) .then((data) => {
        const seed = `INSERT INTO departments (department_name) VALUES ('${data.departmentName}')`
        db.query(sql, function (err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log(`Added department to the database`);
            }});
        });
    });
  };

  async function viewAllEmployees() {

  };

  async function addEmployee() {

  };

  async function updateEmployee() {

  };

  async function viewAllRoles() {

  };

  async function addRole() {

  };
init();