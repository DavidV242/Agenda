const { dbUser, dbPassword, dbHost, dbPort, dbName } = require('./../config/config')

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURI(dbPassword)

const URI = `mysql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

module.exports = {
    development:{
        url: URI,
        dialect: 'mysql'
    },
    production:{
        url: URI,
        dialect: 'mysql'
    }

}