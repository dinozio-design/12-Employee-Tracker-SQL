//requiring resources
const mysql = require('mysql2');
const {userInput} = require('./helpers/userInput');

const validate = require('./helpers/validator');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'cli$ession4My$ql',
    database: 'employees_db'
  },
  console.log(`connected to employees_db`)
);
db.connect(async (err) => {
  if (err) { throw err };
  // console.log(`Connected to db thread ${db.threadId}`);
});

async function tracker() {
  const input = await userInput();
  validate(input,db);
}

tracker();

exports.tracker = tracker;

