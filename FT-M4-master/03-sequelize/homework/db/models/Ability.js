const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name: {
      type:DataTypes.STRING,
      unique: 'compositeId',
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    mana_cost: {
      type: DataTypes.FLOAT,
      unique: 'compositeId',
      allowNull: false,
      validate: {
        max: 250.0,
        min: 10.0
      }
    },
    summary:{
      type: DataTypes.VIRTUAL,
      get(){
        return `${this.name} (${Math.ceil(this.mana_cost)} points of mana) - Description: ${this.description}`
      }
    }
  })
}