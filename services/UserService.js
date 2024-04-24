const { TableNames } = require('../constants');
const FileManager = require('../models/FileManager');

const usersFile = new FileManager(TableNames.users);

module.exports.getAllUsers = async () => {
  return await usersFile.get();
};

exports.createUser = async (user) => {
  return await usersFile.set(user);
};

exports.getUserById = async (id) => {
  return await UserModel.findById(id);
};

exports.updateUser = async (id, user) => {
  return await UserModel.findByIdAndUpdate(id, user);
};

exports.deleteUser = async (id) => {
  return await UserModel.findByIdAndDelete(id);
};
