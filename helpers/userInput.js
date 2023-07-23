const inquirer = require('inquirer');

const primaryQs = [{
  type: 'list',
  message: 'What woudl you like to do?',
  name: 'overall',
  choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'exit'],
}];

const departmentQs =[{
  type: 'input',
  message: 'What is the name of the department?',
  name: 'department',
}];

const roleQs=[{
  type: 'input',
  message: 'What is the role title?',
  name: 'title',
},{
  type: 'input',
  message: 'What is the allocated salary?',
  name: 'salary',
},{
  type: 'list',
  message: 'Which department does it belong to?',
  name: 'department',
  choices: [],
}];

const userInput = async() => {
  const ask = await   inquirer
  .prompt(primaryQs)
  const userChoice = ask.overall.replace(/ /g, "").toLowerCase();
  // console.log(userChoice, 'hi');
  return userChoice;
}

const departmentInput = async() =>{
  return await inquirer.prompt(departmentQs);
}

const roleInput = async(roleChoices)=>{
  roleChoices.forEach(element => {
    roleQs[2].choices.push(element);
  });
  // console.log(roleQs[2].choices);
  return await inquirer.prompt(roleQs);
}
module.exports = {userInput,departmentInput,roleInput};