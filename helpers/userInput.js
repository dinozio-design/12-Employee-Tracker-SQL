const inquirer = require('inquirer');

const primaryQs = [{
    type: 'list',
    message: 'What woudl you like to do?',
    name: 'overall',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
  }
];

const userInput = async(questions) => {
  return await   inquirer
  .prompt(primaryQs).then((data) => {
    const primaryAction = data.overall.replace(/ /g, "").toLowerCase();
    console.log(primaryAction);
  });
}
// const addEmployee

module.exports = userInput();