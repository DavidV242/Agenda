const {Router} = require('express')
const userRouter = require ('./users.routes')

function routerApi(app){
    const router = Router()

    app.use('/api/v1', router)
    router.use('/users', userRouter)
}

module.exports = routerApi