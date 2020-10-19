require('dotenv').config();
const { prompt } = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const PORT = process.env.PORT || 3001;

// const inputCheck = require('../../utils/inputCheck.js');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: process.env.PASSWORD,
    database: 'employees'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
});

//Get all departments
getDepartments = () => {
    // SELECT everything from the 'departments' table
    connection.query('SELECT * FROM department',
        function (err, res) {
            if (err) throw err;
            //console.log(query.sql);  
            console.log(res);
            connection.end();
        });
};

//Add a department
addDepartment = () => {
    const query = connection.query(
        'INSERT INTO department SET ?',
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows);
        }
    );
    console.log(query.sql);
};

//Get all employees
getEmployees = () => {
    // SELECT everything from the 'departments' table
    connection.query('SELECT * FROM employee',
        function (err, res) {
            if (err) throw err;
            //console.log(query.sql);  
            console.log(res);
            connection.end();
        });
};

//Add an employee
addEmployee = () => {
    const query = connection.query(
        'INSERT INTO employee SET ?',
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows);
        }
    );
    console.log(query.sql);
};

//Update Employee
updateemployee = () => {
    const query = connection.query(
        'UPDATE employee SET ? WHERE ?',
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows);
        }
    );
    console.log(query.sql);
};

//Get all roles
getRoles = () => {
    // SELECT everything from the 'departments' table
    connection.query('SELECT * FROM role',
        function (err, res) {
            if (err) throw err;
            //console.log(query.sql);  
            console.log(res);
            connection.end();
        });
};

//Add a role
addRole = () => {
    const query = connection.query(
        'INSERT INTO role SET ?',
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows);
        }
    );
    console.log(query.sql);
};

// // Default response for any other request(Not Found) Catch all
// app.use((req, res) => {
//     res.status(404).end();
// });

// // Start server after DB connection
// db.on('open', () => {
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// });