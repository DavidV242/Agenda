const { DataTypes, Model } = require("sequelize");

const AGENDA_TABLE = 'agendas'

const AgendaSchema = {

    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date:{
        type:DataTypes.DATEONLY,
        allowNull: false
    },
    startTime:{
        type:DataTypes.TIME,
        allowNull: false,
    },
    endTime:{
        type:DataTypes.TIME,
        allowNull: false
    },
    user:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    place:{
        type:DataTypes.STRING,
        allowNull: false
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    }
}

class Agenda extends Model{
    static associate(models){

    }

    static config(sequelize){
        return {sequelize, tableName: AGENDA_TABLE, modelName:'Agenda', timestamps:false}
    }
}

module.exports = {AGENDA_TABLE, AgendaSchema, Agenda}