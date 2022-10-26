'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Voucher_detail', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            voucher_id: {
                type: Sequelize.INTEGER
            },
            active: {
                type: Sequelize.BOOLEAN
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            expire_date: {
                type: Sequelize.DATE
            },
            voucher_percent: {
                type: Sequelize.DECIMAL
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Voucher_detail');
    }
};