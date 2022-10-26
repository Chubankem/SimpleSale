'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('product_recipe', {
            product_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            ingredient_id: {
                type: Sequelize.INTEGER
            },
            ingre_amount: {
                type: Sequelize.INTEGER
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('product_recipe');
    }
};