const { Sequelize, DataTypes } = require('sequelize')
const db = require('../settings/ConnSequelize')

const LinesProductions = db.sequelize.define('LinesProductions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})



module.exports = { LinesProductions }