'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Discount', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            desc: {
                type: Sequelize.TEXT
            },
            discount_percent: {
                type: Sequelize.DECIMAL
            },
            active: {
                type: Sequelize.BOOLEAN
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Discount');
    }
};