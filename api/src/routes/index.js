const {Router} = require('express');
const app = Router();
const {getUsers} = require('../controllers');
const {conn} = require('../db/db');

app.get('/users', async (req, res) => {
    try {
        const users = await getUsers(conn);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.post('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    });
});