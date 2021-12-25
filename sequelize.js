import Sequelize from 'sequelize'
import config from './config'

var db = {}

const sequelize = new Sequelize(
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

let models = [
  require('./models/nutrient_foods'),
  require('./models/foods'),
  require('./models/nutrients'),
]

// Initialize models
models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize)
  db[seqModel.name] = seqModel
})

// Apply associations
Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
