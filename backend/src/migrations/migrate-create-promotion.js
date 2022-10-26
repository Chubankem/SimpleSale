'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Promotion', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            voucher_code: {
                type: Sequelize.STRING
            },
            desc: {
                type: Sequelize.TEXT
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            create_at: {
                type: Sequelize.DATE
            },
            voucher_percent: {
                type: Sequelize.DECIMAL
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Promotion');
    }
};