const express = require('express')
const cors = require('cors')
const {port: APP_PORT} = require('./config/config')
const routerApi = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())

routerApi(app)

app.listen(APP_PORT, () => {
    console.log(`App running on ${APP_PORT}`)
})