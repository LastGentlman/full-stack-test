const { Sequelize } = require('sequelize');
const modelUser = require('../models')
require('dotenv').config();

const {DB_USER, DB_PASS, DB_HOST} = process.env;

const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:3306/testing_ali_fullstack`, {
    logging: true, //
    native: false
});

modelUser(sequelize);

// Ej de Tabla relacional (no se si sara necesaria)
// const {Recipe, Diet} = sequelize.models;

// Recipe.belongsToMany(Diet, {through: 'Diet_Recipe'});
// Diet.belongsToMany(Recipe, {through: 'Diet_Recipe'});

module.exports = {
    ...sequelize.models,
    conn: sequelize
};