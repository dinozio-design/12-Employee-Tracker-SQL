const mysql = require('mysql2');
const tracker = require('../tracker');

async function viewAllEmployees(db) {
    try {
        const result = await db.promise().query('SELECT * FROM employee');
        console.table(result[0]);
        tracker.isTracking();
    } catch (err) {
        console.error(err);
    }

    // async function viewAllRoles(db) {
        
    // }
//   db.query('SELECT * FROM employee', function (err, results) {
//     if (err) {
//         console.error(err);        
//     }
//         console.log(results);
//     });
}

module.exports = viewAllEmployees;