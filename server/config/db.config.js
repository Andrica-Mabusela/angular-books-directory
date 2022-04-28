require('dotenv').config()
const Sequelize = require('sequelize')

const sequelizeConnection = new Sequelize('books-app', process.env.DB_USER, process.env.DB_PASSWORD,{
    host: 'localhost',
    port: process.env.DB_PORT,
    dialect: 'postgres'
})


module.exports = sequelizeConnection