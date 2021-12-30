import { DataTypes } from 'sequelize'
import _foods from './foods'
import _nutrientFoods from './nutrient_foods'
import _nutrients from './nutrients'

function initModels(sequelize) {
  const foods = _foods(sequelize, DataTypes)
  const nutrientFoods = _nutrientFoods(sequelize, DataTypes)
  const nutrients = _nutrients(sequelize, DataTypes)

  nutrientFoods.belongsTo(foods, { as: 'food', foreignKey: 'food_id' })
  foods.hasMany(nutrientFoods, { as: 'nutrientFoods', foreignKey: 'food_id' })
  nutrientFoods.belongsTo(nutrients, {
    as: 'nutrient',
    foreignKey: 'nutrient_id',
  })
  nutrients.hasMany(nutrientFoods, {
    as: 'nutrientFoods',
    foreignKey: 'nutrient_id',
  })

  return {
    foods,
    nutrientFoods,
    nutrients,
  }
}

export default initModels
