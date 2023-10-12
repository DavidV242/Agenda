const { Router } = require('express')
const  UserController  = require('../controllers/user.controller')

const router = Router()

const controller = new UserController()

router.get('/', async (req, res)=>{
    const users = await controller.index()
    res.json({users})
})

module.exports = router

