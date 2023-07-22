const {viewAllEmployees,viewAllRoles,viewAllDepartments}= require('./query');

const validate = (input,db) => {
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
        //querry database here for all ee's
        console.log(input);
    };
}

module.exports = validate;