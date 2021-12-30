import Sequelize from 'sequelize'
// Local
import config from './config'
import NutrientFoodsModel from './models/nutrient_foods'
import FoodsModel from './models/foods'
import NutrientsModel from './models/nutrients'

const db = {}

const sequelizeConnection = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: 'mysql',
    define: {
      freezeTableName: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    // <http://docs.sequelizejs.com/manual/tutorial/querying.html#operators>
    operatorsAliases: false,
  }
)

const models = [NutrientFoodsModel, FoodsModel, NutrientsModel]

// Initialize models
models.forEach((model) => {
  const seqModel = model(sequelizeConnection, Sequelize)
  db[seqModel.name] = seqModel
})

// Apply associations
Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db)
  }
})

db.sequelize = sequelizeConnection
db.Sequelize = Sequelize

export default db
