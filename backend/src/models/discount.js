'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Discount extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Discount.init({
        name: DataTypes.STRING,
        desc: DataTypes.TEXT,
        discount_percent: DataTypes.DECIMAL,
        active: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Discount',
        timestamps: false,
        freezeTableName: true
    });
    return Discount;
};