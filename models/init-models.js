var DataTypes = require('sequelize').DataTypes
var _foods = require('./foods')
var _nutrient_foods = require('./nutrient_foods')
var _nutrients = require('./nutrients')

function initModels(sequelize) {
  var foods = _foods(sequelize, DataTypes)
  var nutrient_foods = _nutrient_foods(sequelize, DataTypes)
  var nutrients = _nutrients(sequelize, DataTypes)

  nutrient_foods.belongsTo(foods, { as: 'food', foreignKey: 'food_id' })
  foods.hasMany(nutrient_foods, { as: 'nutrient_foods', foreignKey: 'food_id' })
  nutrient_foods.belongsTo(nutrients, {
    as: 'nutrient',
    foreignKey: 'nutrient_id',
  })
  nutrients.hasMany(nutrient_foods, {
    as: 'nutrient_foods',
    foreignKey: 'nutrient_id',
  })

  return {
    foods,
    nutrient_foods,
    nutrients,
  }
}
module.exports = initModels
module.exports.initModels = initModels
module.exports.default = initModels
