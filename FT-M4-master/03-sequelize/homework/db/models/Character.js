const { DataTypes, ENUM } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Character', {
    code: {
      type: DataTypes.STRING(5),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validator:{
        notIn:[["Henry", "SoyHenry","Soy Henry"]]
      }
    },
    age : {
      type: DataTypes.INTEGER,
      get(){
        return this.getDataValue('age') && this.getDataValue('age') + ' years old'
      }
    },
    race: {
      type: DataTypes.ENUM('Human','Elf','Machine','Demon','Animal','Other'),
      defaultValue:'Other',
    },
    hp: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    mana: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date_added: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    }
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  })
}