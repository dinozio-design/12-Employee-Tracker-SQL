const { viewAllEmployees, viewAllRoles, viewAllDepartments, addDepartment, existingRoles,existingDepartments,addRole , addEmployee, existingEmployees, employeeName, updateRole} = require('./query');
const { departmentInput,roleInput, employeeInput, employeeRoleUpdate } = require('./userInput');

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
            const roleStack = await existingRoles(db);
            let roleChoices = [];
            roleStack.forEach(element => {
                roleChoices.push(element.title);
            });
            const managerStack = await existingEmployees(db);
            let managerChoices = [];
            managerStack.forEach(element =>{
                managerChoices.push(element.last_name);
            });

// console.log("1", roleChoices);
            let employeeQuest = await employeeInput(roleChoices, managerChoices);
            let roleName = employeeQuest.role;
            let managerName = employeeQuest.manager;
            
            employeeQuest.role = roleChoices.indexOf(roleName)+1;
            employeeQuest.manager = managerChoices.indexOf(managerName)+1;
            
            // console.log(employeeQuest);
            addEmployee(db, employeeQuest);
            console.log(`New employee has been added : `, employeeQuest.last_name);
            break;
        case "updateemployeerole":
            //querry database here for all ee's
            const employeeRoleStackNames = await employeeName(db);
            // console.log(employeeRoleStackNames);
            let eeNames = [];
            employeeRoleStackNames.forEach(element =>{
                eeNames.push(element.last_name);
            });
            // console.log(eeNames);

            const employeeRoleStackRoles = await existingRoles(db);
            // console.log(employeeRoleStackRoles);
            let eeRoles = [];
            employeeRoleStackRoles.forEach(element =>{
                eeRoles.push(element.title);
            });
            // console.log(eeRoles);
            
            let roleUpdateQuest = await employeeRoleUpdate(eeNames, eeRoles);
            // console.log(roleUpdateQuest);
            
            let newRoleName = roleUpdateQuest.role;
            roleUpdateQuest.role = eeRoles.indexOf(newRoleName)+1;
            // console.log(roleUpdateQuest);
            updateRole(db,roleUpdateQuest);
            break;
        case "viewallroles":
            //querry database here for all ee's
            viewAllRoles(db);
            break;
        case "addrole":
            //querry database here for all ee's
            const depStack = await existingDepartments(db);
            let depChoices = [];
            depStack.forEach(element => {
                depChoices.push(element.dept_name);
            });
            
            let roleQuest = await roleInput(depChoices);
            let depName = roleQuest.department;

            roleQuest.department = depChoices.indexOf(depName)+1;

            // console.log(roleQuest.department);
            // console.log(roleQuest);

            addRole(db, roleQuest);
            console.log(`New role has been added : `, roleQuest.title);

            break;
        case "viewalldepartments":
            //querry database here for all ee's
            viewAllDepartments(db);
            // console.log(input);
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