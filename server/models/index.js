const  db = require('../config/index');

db.students = require("./studentModel")(db.sequelize, db.Sequelize);
db.rooms = require("./roomModel")(db.sequelize, db.Sequelize);
db.room_participants = require("./roomParticipantsModel")(db.sequelize, db.Sequelize,db.students,db.rooms);


module.exports=db;