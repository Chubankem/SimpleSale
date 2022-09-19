'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Admin_type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Admin_type.init({
        type_name: DataTypes.STRING,
        premissons: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Admin_type',
    });
    return Admin_type;
};