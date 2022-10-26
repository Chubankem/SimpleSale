'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Voucher_detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Voucher_detail.init({
        voucher_id: DataTypes.INTEGER,
        active: DataTypes.BOOLEAN,
        quantity: DataTypes.INTEGER,
        expire_date: DataTypes.DATE,
        voucher_percent: DataTypes.DECIMAL
    }, {
        sequelize,
        modelName: 'Voucher_detail',
        timestamps: false,
        freezeTableName: true
    });
    return Voucher_detail;
};