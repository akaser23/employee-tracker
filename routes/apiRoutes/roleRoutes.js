const express = require ('express');
const router = express.Router();
const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');


//Get all roles
router.get('/role', (req, res) => {
    const sql = `SELECT * FROM role`;
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data:rows
        });
    });
});

//Add a role
router.post('/role', ({ body }, res) => {
    const errors = inputCheck(body, 'title', 'role_id', 'department_id', 'salary');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql =`INSERT INTO role (title, role_id, department_id, salary)
                VALUES (?, ?, ?, ?)`;
    const params = [body.title, body.role_id, body.department_id, body.salary];
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: body,
            id: this.lastID
        });
    });
});