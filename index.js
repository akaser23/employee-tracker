const inquirer = require('inquirer');

const 

const options = (chosenOption) => {
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
    ]);
};

options()
    .then(chosenOption => {
        return 
    })