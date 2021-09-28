const { Sequelize, DataTypes } = require('sequelize')
const db = require('../settings/ConnSequelize')

const monitorLines = db.sequelize.define('monitorLines', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    ordem: {
        type: Sequelize.INTEGER,
    },
    line: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    time: {
        type: Sequelize.INTEGER,
    },
    active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
})

//monitorLines.sync({ force: true })

module.exports = { monitorLines }