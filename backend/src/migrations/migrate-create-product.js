'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Product', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            category_id: {
                type: Sequelize.INTEGER
            },
            inventory_id: {
                type: Sequelize.INTEGER
            },
            discount_id: {
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            desc: {
                type: Sequelize.TEXT
            },
            price: {
                type: Sequelize.DECIMAL
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Product');
    }
};