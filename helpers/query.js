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
        const result = await db.promise().query('SELECT * FROM role');
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

async function existingRoles(db) {
    try {
        const result = await db.promise().query('SELECT title FROM role');
        return result[0];
    } catch (err) {
        console.error(err);
    }
}

module.exports = { viewAllEmployees, viewAllRoles, viewAllDepartments, addDepartment, existingRoles };