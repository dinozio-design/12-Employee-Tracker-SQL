//requiring resources
const inquirer = require('inquirer');
const mysql = require('mysql2');

//I will rename this to smoething more appropreate
const userInput = require('./helpers/userInput');
const primaryQs = [{
  type: 'list',
  message: 'What woudl you like to do?',
  name: 'overall',
  choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
}
];

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'cli$ession4My$ql',
    database: 'employees_db'
  }
);

db.connect(async (err) => {
  if (err) { throw err };
  console.log(`Connected to db thread ${db.threadId}`);
});
const tracker = async () => {
  const input  = await userInput(primaryQs);
  // const primaryAction = input.overall.replace(/ /g, "").toLowerCase();
  console.log(typeof input);
};

tracker();


