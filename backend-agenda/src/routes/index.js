const {Router} = require('express')
const userRouter = require ('./users.routes')
const areaRouter = require ('./areas.routes')


function routerApi(app){
    const router = Router()

    app.use('/api/v1', router)
    router.use('/users', userRouter)
    router.use('/areas', areaRouter)
}

module.exports = routerApi