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
    database: 'employee'
  },
  console.log(`Connected to the database.`)
);
db.connect(async(err)=>{
  if (err){ throw err};
  console.log(`Connected to server at ${db.threadId}`);
})
function userInput (){}



// to catch all unfulfilled requests
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});