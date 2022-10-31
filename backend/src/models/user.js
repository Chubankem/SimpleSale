'use strict';
const {
  Model
} = require('sequelize');
const user_payment = require('./user_payment');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    gender: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
    freezeTableName: true
  });
  return User;
};