// const {User} = require('../db/db.js');
const axios = require('axios');
require('dotenv').config();

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getUsers
}