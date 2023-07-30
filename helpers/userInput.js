const inquirer = require('inquirer');

const primaryQs = [{
  type: 'list',
  message: 'What woudl you like to do?',
  name: 'overall',
  choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'exit'],
}];

const departmentQs = [{
  type: 'input',
  message: 'What is the name of the department?',
  name: 'department',
}];

const employeeQs = [
  {
    type: 'input',
    message: 'What is the First name of the employee?',
    name: 'first_name'
  }, {
    type: 'input',
    message: 'What is the Last name of the employee?',
    name: 'last_name'
  }, {
    type: 'list',
    message: 'What is the role of the employee?',
    name: 'role',
    choices: [],
  },
  {
    type: 'list',
    message: 'Who is the manager of the employee?',
    name: 'manager',
    choices: [],
  }
];

const roleQs = [
  {
    type: 'input',
    message: 'What is the role title?',
    name: 'title',
  }, {
    type: 'input',
    message: 'What is the allocated salary?',
    name: 'salary',
  }, {
    type: 'list',
    message: 'Which department does it belong to?',
    name: 'department',
    choices: [],
  }
];

const userInput = async () => {
  const ask = await inquirer
    .prompt(primaryQs)
  const userChoice = ask.overall.replace(/ /g, "").toLowerCase();
  // console.log(userChoice, 'hi');
  return userChoice;
}

const departmentInput = async () => {
  return await inquirer.prompt(departmentQs);
}

const roleInput = async (depChoices) => {
  depChoices.forEach(element => {
    roleQs[2].choices.push(element);
  });
  // console.log(roleQs[2].choices);
  return await inquirer.prompt(roleQs);
}

const employeeInput = async (roleChoices, managerChoices)=>{
  roleChoices.forEach(element =>{
    employeeQs[2].choices.push(element);
  });
  managerChoices.forEach(element =>{
    employeeQs[3].choices.push(element);
  });
  return await inquirer.prompt(employeeQs);
}

module.exports = { userInput, departmentInput, roleInput, employeeInput };