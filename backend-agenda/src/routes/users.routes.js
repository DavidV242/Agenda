const { Router } = require('express')
const  UserController  = require('../controllers/user.controller')

const router = Router()

const controller = new UserController()

router.get('/', async (req, res)=>{
    const users = await controller.index()
    res.json({users})
})

router.post('/', async(req, res)=>{
    const {name,email,password,status} =  req.body
    const user = await controller.create(name,email,password,status)
    res.status(201).json({user})
})

module.exports = router

