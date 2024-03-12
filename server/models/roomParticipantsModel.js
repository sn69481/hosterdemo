
module.exports = (sequelize, Sequelize,Student,Room) => {
    const RoomParticipant = sequelize.define("room_participants", {});
    RoomParticipant.belongsTo(Student);
    RoomParticipant.belongsTo(Room);
    return RoomParticipant;
  };