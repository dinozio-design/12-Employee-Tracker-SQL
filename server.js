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
    database: 'employees'
  },
  console.log(`Connected to the database.`)
);

inquirer
  .prompt([
    // {
    //     type: 'input',
    //     name: 'name',
    //     message: 'What is your name?',
    //   },
    //   {
    //     type: 'checkbox',
    //     message: 'What languages do you know?',
    //     name: 'stack',
    //     choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    //   },
    {
      type: 'list',
      message: 'What woudl you like to do?',
      name: 'create_db',
      choices: ['create DataBase', 'phone', 'telekinesis'],
    }
  ]).then(async (answers) => {
  //do something with the responses
  //for example, call query nodes based on response, or open new inquirer
  }
  


// to catch all unfulfilled requests
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});