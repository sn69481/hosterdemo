const config = require("./dbConfig");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;