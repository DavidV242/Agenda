const { DataTypes, Model } = require("sequelize");

const USER_TABLE = 'users'

const UserSchema = {

    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    }
}

class User extends Model{
    static associate(models){

    }

    static config(sequelize){
        return {sequelize, tableName: USER_TABLE, modelName:'User', timestamps:false}
    }
}

module.exports = {USER_TABLE, UserSchema, User}