const mysql = require ("mysql2");
const inquirer = require ("inquirer");

const employeeArray = ['None'];
const departmentsArray = [];
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
    const departments = await db.promise().query('')
  };

  async function addDepartment() {

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