const { viewAllEmployees, viewAllRoles, viewAllDepartments, addDepartment, existingRoles,existingDepartments,addRole } = require('./query');
const { departmentInput,roleInput } = require('./userInput');

const validate = async (input, db) => {
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
            const roleStack = await existingDepartments(db);
            let roleChoices = [];
            roleStack.forEach(element => {
                roleChoices.push(element.dept_name);
            });
            console.log("1", roleChoices);
            let roleQuest = await roleInput(roleChoices);
            let depName = roleQuest.department;

            roleQuest.department = roleChoices.indexOf(depName)+1;

            console.log(roleQuest.department);
            console.log(roleQuest);

            addRole(db, roleQuest);
            console.log(`New role has been added`, roleQuest.title);

            break;
        case "viewalldepartments":
            //querry database here for all ee's
            viewAllDepartments(db);
            console.log(input);
            break;
        case "adddepartment":
            let response = await departmentInput();
            addDepartment(db, response);
            console.log(`New department has been added `, response);
            break;
        case "exit":
            process.exit();
    };
}

module.exports = validate;