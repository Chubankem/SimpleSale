'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product_recipe extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product_recipe.init({
        product_id: DataTypes.INTEGER,
        ingredient_id: DataTypes.INTEGER,
        ingre_amount: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Product_recipe',
        timestamps: false,
        freezeTableName: true
    });
    return Product_recipe;
};