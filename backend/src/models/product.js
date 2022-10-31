'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product.init({
        category_id: DataTypes.INTEGER,
        inventory_id: DataTypes.INTEGER,
        discount_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        desc: DataTypes.TEXT,
        price: DataTypes.DECIMAL,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Product',
        timestamps: false,
        freezeTableName: true
    });
    return Product;
};