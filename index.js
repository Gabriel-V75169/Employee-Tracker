const mysql = require ("mysql2/promise");
const inquirer = require ("inquirer");
require('dotenv').config();



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
        db.query(seed, function (err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log(`Added department to the database`);
            }});
        });
     };

  async function viewAllEmployees() {
    
    const employees = await db.promise().query(`SELECT * FROM employees`);

    return employees;
  };

  async function addEmployee() {

    const employees = await db.promise().query(`SELECT * FROM employees`);
    const roles = await db.promise().query(`SELECT * FROM roles`);

    db.query(employees, function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.log(`Employees retrieved`)
        }
    });
    db.query(roles, function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.log(`roles retrieved`)
        }
    });

    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Employees First name',
        },

        {
            type: 'input',
            name: 'lastName',
            message: 'Employees Last name',
        },

        {
            type: 'list',
            name: 'roleId',
            message:'What is their role in the company ?',
            choices: [],
        },

        {
            type: 'list',
            name: 'managerName',
            message: 'Who is the employees manager ?',
            choices:  [],
        },

    ]) .then((data) => {
        const seed = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${data.firstName},${data.lastName},${data.roleId},${data.managerName} ')`
        db.query(seed, function (err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log(`Added employee to the database`);
            }});
    })
  };

  async function updateEmployee() {

  };

  async function viewAllRoles() {
    
    const roles = await db.promise().query(`SELECT * FROM roles`);

    return roles;
  };

  async function addRole() {
    
    const departments = await db.promise().query(`SELECT * FROM departments`);
    const roles = await db.promise().query(`SELECT * FROM roles`);

    db.query(departments, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(`departments retrieved`)
        }
    })

    inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the role?',
        },

        {
            type: 'number',
            name: 'roleSalary',
            message: 'What is the average salary ?',
        },

        {
            type: 'list',
            message: 'What department is this role from',
            name: 'departmentId',
            choices: [],
        },
    ]) .then((data) => {
        const seed = `INSERT INTO roles (role_name, role_salary, department_id) VALUES ('${data.roleName},${data.roleSalary},${data.departmentId}')`
        db.query(seed, function (err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log(`Added role to the database`);
            }});
  })};
init();