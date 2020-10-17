const inquirer = require('inquirer');
const db = require('./db/database');
const mysql = require('mysql2');
const cTable = require('console.table');
const PORT = process.env.PORT || 3001;
// const app = express(); 

//Use apiRoutes
app.use('/api', apiRoutes);

// const options = () => {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'options',
//             message: 'What would you like to do?',
//             choices: [
//                 'view all departments',
//                 'view all roles',
//                 'view all employees',
//                 'add a department',
//                 'add a role',
//                 'add an employee',
//                 'update an employee role'
//             ]
//         }
//     ]);
// };

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3002,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Iamnotyourtoy3',
    database: 'employees'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
});


afterConnection = () => {
    // Write a simple query that will SELECT everything from the 'products' table
    connection.query('select a.first_name, a.last_name, b.title, b.salary, c.first_name as manager_first, c.last_name as manager_last from employee a join role b on a.role_id = b.id join employee c on a.manager_id = c.id;', function (err, res) {
        //console.log(query.sql);  
        console.log(res);

        // Log the results in the console
        //
        // YOUR CODE HERE
        //
        connection.end();
    }
    );
};


// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});