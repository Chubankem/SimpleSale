'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Cart.init({
        user_id: DataTypes.INTEGER,
        voucher_id: DataTypes.INTEGER,
        total_price: DataTypes.DECIMAL
    }, {
        sequelize,
        modelName: 'Cart',
        timestamps: false,
        freezeTableName: true
    });
    return Cart;
};