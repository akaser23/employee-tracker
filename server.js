require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const PORT = process.env.PORT || 3001;

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
    promptOptions();
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
addDepartment = (dept) => {
    const query = connection.query(
        'INSERT INTO department SET ?',
        {
            dept_name: dept
        },
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
addEmployee = (nameFirst, nameLast, role, manager) => {
    const query = connection.query(
        'INSERT INTO employee SET ?',
        {
            first_name: nameFirst,
            last_name: nameLast,
            role_id: role,
            manager_id: manager
        },
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
addRole = (title, salary, dept_id) => {
    const query = connection.query(
        'INSERT INTO role SET ?',
        {
            title: title,
            salary: salary,
            department_id: dept_id
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows);
        }
    );
    console.log(query.sql);
};

const promptOptions = () => {
   return inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update an employee role'
            ]
        }
    ])
        .then(({ options }) => {
            if (options === 'view all departments') {
                getDepartments();
            }
            else if (options === 'view all roles') {
                getRoles();
            }
            else if (options === 'view all employees') {
                getEmployees();
            }
            else if (options === 'add a department') {
                inquirer
                    .prompt({
                        type: 'input',
                        name: 'dept',
                        message: 'What is the name of the department you would like to add?',
                    })
                    .then(({ dept }) => {
                        addDepartment(dept);
                    });
            }
            else if (options === 'add a role') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'title',
                            message: 'What is the role title you would like to add?'
                        },
                        {
                            type: 'input',
                            name: 'salary',
                            message: 'What is the salary for the new role?'
                        },
                        {
                            type: 'input',
                            name: 'dept_id',
                            message: 'What is the deptartment ID of this new role?'
                        }])
                    .then(({ title, salary, dept_id }) => {
                        addRole(title, salary, dept_id);
                    });
            }
            else if (options === 'add an employee') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'nameFirst',
                            message: 'What is the first name of the new employee?',
                        },
                        {
                            type: 'input',
                            name: 'nameLast',
                            message: 'What is the last name of the new employee?'
                        },
                        {
                            type: 'input',
                            name: 'role',
                            message: 'What is the role id of the new employee?'
                        },
                        {
                            type: 'input',
                            name: 'manager',
                            message: 'Who is the manager of the new employee?'
                        }])
                    .then(({ nameFirst, nameLast, role, manager }) => {
                        addEmployee(nameFirst, nameLast, role, manager);
                    });
            }
        });
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