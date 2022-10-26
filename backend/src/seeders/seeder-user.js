'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [{
      username: 'qwerty',
      password: '123456',
      first_name: 'lorem',
      last_name: 'insum',
      telephone: '98654321',
      email: 'qwerty@123456.com',
      gender: 1
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
