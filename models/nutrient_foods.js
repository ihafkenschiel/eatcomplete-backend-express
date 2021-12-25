const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'nutrient_foods',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      food_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'foods',
          key: 'id',
        },
      },
      nutrient_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'nutrients',
          key: 'id',
        },
      },
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      quantity_measurement: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      percent_rda: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'nutrient_foods',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'food_id_idx',
          using: 'BTREE',
          fields: [{ name: 'food_id' }],
        },
        {
          name: 'nutrient_id_idx',
          using: 'BTREE',
          fields: [{ name: 'nutrient_id' }],
        },
      ],
    }
  )
}
