const { Agenda, AgendaSchema } = require('./agenda.model')
const { Area, AreaSchema } = require('./area.model')
const { User, UserSchema } = require ('./user.model')

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
    User.associate(sequelize.models)
    Area.init(AreaSchema, Area.config(sequelize))
    Area.associate(sequelize.models)
    Agenda.init(AgendaSchema, Agenda.config(sequelize))
    Agenda.associate(sequelize.models)
}

module.exports = setupModels 
