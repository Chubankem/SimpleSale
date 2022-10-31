'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User_payment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

        }
    }
    User_payment.init({
        user_id: DataTypes.INTEGER,
        payment_type: DataTypes.STRING,
        provider: DataTypes.STRING,
        expiry: DataTypes.DATEONLY,
        require_account: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'User_payment',
        timestamps: false,
        freezeTableName: true
    });
    return User_payment;
};