const {viewAllEmployees,viewAllRoles,viewAllDepartments,addDepartment}= require('./query');
const {departmentInput} = require('./userInput');

const validate = async (input,db) => {
    // let closeTheApp = false;
  // while (!closeTheApp) {
    switch (input) {
      case "viewallemployees":
        //querry database here for all ee's
        viewAllEmployees(db);
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
        viewAllRoles(db);
        break;
      case "addrole":
        //querry database here for all ee's
        console.log(input);
        break;
      case "viewalldepartments":
        //querry database here for all ee's
        viewAllDepartments(db);
        console.log(input);
        break;
      case "adddepartment":
        let response = await departmentInput ();
        addDepartment(db,response)
        // console.log(response);
        break;
        case "exit":
            process.exit();
    };
}

module.exports = validate;