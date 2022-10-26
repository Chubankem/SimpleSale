'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product_ingredient extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product_ingredient.init({
        name: DataTypes.STRING,
        ingre_quantity: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Product_ingredient',
        timestamps: false,
        freezeTableName: true
    });
    return Product_ingredient;
};