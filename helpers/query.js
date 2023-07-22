const mysql = require('mysql2');

async function viewAllEmployees(db) {
    try {
        const result = await db.promise().query('SELECT * FROM employee');
        console.table(result[0]);
    } catch (error) {
        
    }

//   db.query('SELECT * FROM employee', function (err, results) {
//     if (err) {
//         console.error(err);        
//     }
//         console.log(results);
//     });
}

module.exports = viewAllEmployees;