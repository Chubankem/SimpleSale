'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order_payment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Order_payment.init({
        amount: DataTypes.INTEGER,
        provider: DataTypes.STRING,
        quantity: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Order_payment',
        timestamps: false,
        freezeTableName: true
    });
    return Order_payment;
};