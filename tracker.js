//requiring resources
const mysql = require('mysql2');
const userInput = require('./helpers/userInput');

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
  const input = await userInput();
    let closeTheApp = false;
  // while (!closeTheApp) {
    switch (input) {
      case "viewallemployees":
        //querry database here for all ee's
        console.log(input);
        break;
      case "addemployee":
        //querry database here for all ee's
        console.log(input);
        break;
      case "updateemployeerole":
        //querry database here for all ee's
        console.log(input);
        break;
      case "viewallroles":
        //querry database here for all ee's
        console.log(input);
        break;
      case "addrole":
        //querry database here for all ee's
        console.log(input);
        break;
      case "viewalldepartments":
        //querry database here for all ee's
        console.log(input);
        break;
      case "adddepartment":
        //querry database here for all ee's
        console.log(input);
    };
};

tracker();


