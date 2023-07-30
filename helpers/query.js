// const mysql = require('mysql2');
const tracks = require('../tracker');

async function viewAllEmployees(db) {
    try {
        const result = await db.promise().query('SELECT * FROM employee');
        console.table(result[0]);
        tracks.tracker();
    } catch (err) {
        console.error(err);
    }
}

async function viewAllRoles(db) {
    try {
        const result = await db.promise().query('SELECT role.id,role.title,role.salary, department.dept_name  FROM role JOIN department ON role.dept_id = department.id');
        console.table(result[0]);
        tracks.tracker();
    } catch (err) {
        console.error(err);
    }
}

async function viewAllDepartments(db) {
    try {
        const result = await db.promise().query('SELECT * FROM department');
        console.table(result[0]);
        tracks.tracker();
    } catch (err) {
        console.error(err);
    }
}

async function viewAllEmployees(db) {
    try {
        const result = await db.promise().query('SELECT * FROM employee');
        console.table(result[0]);
        tracks.tracker();
    } catch (err) {
        console.error(err);
    }
}

async function addDepartment(db, reponse) {

    try {
        const result = await db.promise().query('INSERT INTO department(dept_name) VALUES(?)', [reponse.department]);
        console.table(result[0]);
        tracks.tracker();
    } catch (err) {
        console.error(err);
    }
}

async function addEmployee (db, response) {
    try {
        const result = await db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?)', [response.title,response.salary,response.department]);
        console.table(result[0]);
        tracks.tracker();
    } catch (err) {
        console.error(err);
    }
}

async function addRole(db, response) {

    try {
        const result = await db.promise().query('INSERT INTO role (title, salary, dept_id) VALUES(?,?,?)', [response.title,response.salary,response.department]);
        console.table(result[0]);
        tracks.tracker();
    } catch (err) {
        console.error(err);
    }
}

async function existingRoles(db) {
    try {
        const result = await db.promise().query('SELECT title FROM role');
        return result[0];
    } catch (err) {
        console.error(err);
    }
}
async function existingDepartments(db) {
    try {
        const result = await db.promise().query('SELECT dept_name FROM department');
        return result[0];
    } catch (err) {
        console.error(err);
    }
}

module.exports = { viewAllEmployees, viewAllRoles, viewAllDepartments, addDepartment, existingRoles,existingDepartments,addRole, addEmployee };