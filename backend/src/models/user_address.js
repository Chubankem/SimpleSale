'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User_address extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User_address.init({
        user_id: DataTypes.INTEGER,
        address_line1: DataTypes.STRING,
        address_line2: DataTypes.STRING,
        city: DataTypes.STRING,
        telephone: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'User_address',
        timestamps: false,
        freezeTableName: true
    });
    return User_address;
};