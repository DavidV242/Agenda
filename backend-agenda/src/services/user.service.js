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

    async findOne(id){
        const user = await this.model.findByPk(id)
        return user
    }

    async update(id, values){
        const user = await this.findOne(id)
        if(!user) return null
        const updateUser = await user.update(values)
        return updateUser
    }

    async delete(id){
        const user = await this.findOne(id)
        if(!user) return null
        await user.destroy() 
        return user.id
    }
}

module.exports = UserService