const User = require('../models/User.model');
const TestDataReader = require('./TestDataReader.service');

class UserCreator {

  static INVALID_LOGIN = 'login.invalid.properties';
  static INVALID_EMAIL = 'email.invalid.properties';
  static INVALID_PASSWORD = 'password.invalid.properties';

  static async withInvalidEmailandPassword() {
    return new User(await TestDataReader.getTestData(this.INVALID_LOGIN));
  }

  static async withInvalidEmail() {
    return new User(await TestDataReader.getTestData(this.INVALID_EMAIL));
  }

  static async withInvalidPassword() {
    return new User(await TestDataReader.getTestData(this.INVALID_PASSWORD));
  }

}

module.exports = UserCreator;
