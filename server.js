//requiring resources
const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'cli$ession4My$ql',
    database: 'employees_db'
  },
  console.log(`Connected to the database.`)
);

db.connect(async(err)=>{
  if (err){ throw err};
  console.log(`Connected to db server at ${db.threadId}`);
  userInput();
})
function userInput (){
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What woudl you like to do?',
      name: 'overall',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
    }
  ]).then((data) => {
    const overallAction = data.overall.replace(/ /g, "");
    console.log(overallAction);
  });
}



// to catch all unfulfilled requests
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});