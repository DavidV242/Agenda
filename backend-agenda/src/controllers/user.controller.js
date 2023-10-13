const UserService = require('./../services/user.service')

class UserController{
    constructor(){
        this.service = new UserService()
    }

    async index(){
        const users = await this.service.getAll()
        return users
    }
    async create(name,email,password,status){
        const user = await this.service.create(name,email,password,status)
        return user
    }
}

module.exports = UserController