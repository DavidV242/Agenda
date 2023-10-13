const {models} = require('./../libs/sequelize')

class UserService {
    constructor(){
        this.model = models.User
    }

    async getAll(){
        const users = await this.model.findAll()
        return users
    }

    async create(name,email,password,status){
        const user = await this.model.create({name,email,password,status})
        return user
    }

    
}

module.exports = UserService