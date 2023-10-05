const express = require('express')
const {port: APP_PORT, port} = require('./config/config')


const app = express()

app.use(express.json())

app.listen(port, () => {
    console.log(`App running on ${port}`)
})