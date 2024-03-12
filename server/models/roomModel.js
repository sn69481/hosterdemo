
module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
      floor: {
        type: Sequelize.INTEGER
      },
      available: {
        type: Sequelize.BOOLEAN,
        default:true, 
      },
    });
  
    return Room;
  };