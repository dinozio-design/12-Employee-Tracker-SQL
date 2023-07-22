//requiring resources
const inquirer = require('inquirer');
const mysql = require('mysql2');

//I will rename this to smoething more appropreate
const primaryQs = require ('./helpers/primaryQs');

const PORT = process.env.PORT || 3001;

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
  userInput();
})

// I will move this to a separate end node to clean up the code
function userInput (){
  inquirer
  .prompt(primaryQs).then((data) => {
    const primaryAction = data.overall.replace(/ /g, "").toLowerCase();
    console.log(primaryAction);
  });
}



