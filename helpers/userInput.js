const inquirer = require('inquirer');

const primaryQs = [{
  type: 'list',
  message: 'What woudl you like to do?',
  name: 'overall',
  choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'exit'],
}
];

const userInput = async() => {
  const ask = await   inquirer
  .prompt(primaryQs)
  const userChoice = ask.overall.replace(/ /g, "").toLowerCase();
  // console.log(userChoice, 'hi');
  return userChoice;
}


// const addEmployee

module.exports = userInput;