'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Cart', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            total_price: {
                type: Sequelize.DECIMAL
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Cart');
    }
};