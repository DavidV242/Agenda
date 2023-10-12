const {Sequelize} = require('sequelize')
const { dbUser, dbPassword, dbHost, dbName, dbPort, env } = require('./../config/config')
const setupModels = require('./../database/models')

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURI(dbPassword)

const URI = `mysql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(URI,{
    dialect: 'mysql',
    logging: env == 'dev'
})

setupModels(sequelize)

module.exports = sequelize