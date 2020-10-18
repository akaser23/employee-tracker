const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck.js');

//Get all departments
router.get('/department', (req, res) => {
    const sql = `SELECT * FROM department`;
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

//Add a department
router.post('/departmet', ({ body }, res) => {
    const errors = inputCheck(body, 'dept_name');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql =`INSERT INTO departments (dept_name)
                VALUES (?)`;
    const params = [body.dept_name];
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

module.exports = router;