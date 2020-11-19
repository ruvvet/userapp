'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.pet.belongsTo(models.user); // 1:M where many pets to a user
      models.pet.belongsToMany(models.toy, {through: "petsToys"}) // M:N

      //example
      // db.pet.findOne({where: {name: 'spot}}).then((spot)=> spot.findUser());
      // equiv to
      // SELECT *
      // FROM users
      // WHERE id = <spots id>
    }



  };
  pet.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pet',
  });
  return pet;
};