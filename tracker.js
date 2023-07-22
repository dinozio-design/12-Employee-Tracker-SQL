//requiring resources
const inquirer = require('inquirer');
const mysql = require('mysql2');

//I will rename this to smoething more appropreate
const userInput = require ('./helpers/userInput');

const tracker = async()=>{
  const {userInput} = await userInput();
};

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'cli$ession4My$ql',
    database: 'employees_db'
  }
);

db.connect(async(err)=>{
  if (err){ throw err};
  console.log(`Connected to db thread ${db.threadId}`);
  tracker();
  });



