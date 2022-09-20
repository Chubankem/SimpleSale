'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('User_address', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            address_line1: {
                type: Sequelize.STRING
            },
            address_line2: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            telephone: {
                type: Sequelize.INTEGER
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('User_address');
    }
};