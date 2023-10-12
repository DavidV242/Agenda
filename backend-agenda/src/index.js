const express = require('express')
const {port: APP_PORT, port} = require('./config/config')
const routerApi = require('./routes')

const app = express()

app.use(express.json())

routerApi(app)

app.listen(port, () => {
    console.log(`App running on ${port}`)
})