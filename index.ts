// Packages
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { ApolloServer } from 'apollo-server-express'

// Local
import routes from 'routes'
import config from './config'
import * as NutrientFoodsModule from './graphql/nutrient_foods'
import * as FoodsModule from './graphql/foods'
import * as NutrientsModule from './graphql/nutrients'

const PORT = process.env.PORT || 9999

// Apollo server
const apolloServer = new ApolloServer({
  modules: [NutrientFoodsModule, FoodsModule, NutrientsModule],
})

// Express server
const app = express()

export const server = app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`)
})

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app })
  console.log(
    `Visit http://${config.db.host}:${PORT}/graphql/ to access GraphQL Query Builder`
  )
})

// Routes
app.use('/', routes)
