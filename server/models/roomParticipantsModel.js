
module.exports = (sequelize, Sequelize) => {
    const RoomParticipant = sequelize.define("room_participants", {
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false
      },
      mobile: {
        type: Sequelize.INTEGER,
        allowNull:false
      }
    });
  
    return RoomParticipant;
  };