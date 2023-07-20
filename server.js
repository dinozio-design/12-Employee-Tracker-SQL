//requiring resources
const inquirer = require('inquirer');
const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


inquirer
  .prompt([
    {
      type: 'list',
      message: 'What woudl you like to do?',
      name: 'overall',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
    }
  ]).then((data) => {

  });

