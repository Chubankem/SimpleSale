'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('User_payment', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            payment_type: {
                type: Sequelize.STRING
            },
            provider: {
                type: Sequelize.STRING
            },
            expiry: {
                type: Sequelize.DATEONLY
            },
            require_account: {
                type: Sequelize.BOOLEAN
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('User_payment');
    }
};