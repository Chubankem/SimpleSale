'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Voucher extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Voucher.init({
        user_id: DataTypes.INTEGER,
        promotion_id: DataTypes.INTEGER,
        voucher_name: DataTypes.STRING,
        get_at: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Voucher',
        timestamps: false,
        freezeTableName: true
    });
    return Voucher;
};