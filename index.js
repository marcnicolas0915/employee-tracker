const db = require('./db/index');
const { prompt } = require("inquirer");
const logo = require('asciiart-logo');
require("console.table");

init();

function init() {
  // console.log("Hello! And Welcome to the Employee Tracker App!");
  const logoText = logo({ name: "Employee Tracker" }).render();
  console.log(logoText);
  loadMainPrompts();
}

function loadMainPrompts() {
  prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        {
          name: 'View all employees',
          value: 'allEmployees'
        },
        {
          name: 'View all roles',
          value: 'allRoles'
        },
        {
          name: 'View all departments',
          value: 'allDepartments'
        },
        {
          name: 'Add a department',
          value: 'addDepartment'
        },
        {
          name: 'Add a role',
          value: 'addRole'
        },
        {
          name: 'Add an employee',
          value: 'addEmployee'
        },
        {
          name: "Update an employee's role",
          value: 'updateEmployeeRole'
        },
        {
          name: 'Quit',
          value: 'quit'
        }
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    switch (choice) {
      case 'allEmployees':
        viewAllEmployees();
        break;
      case 'allRoles':
        viewAllRoles();
        break;
      case 'allDepartments':
        viewAllDepartments();
        break;
      case 'addDepartment':
        addDepartment();
        break;
      case 'addRole':
        addRole();
        break;
      case 'addEmployee':
        addEmployee();
        break;
      case 'updateEmployeeRole':
        updateEmployeeRole();
        break;
      default:
        quit();
    }
  })
};