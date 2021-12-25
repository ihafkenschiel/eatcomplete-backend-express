import config from './config'
// Packages
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { ApolloServer } from 'apollo-server-express'

// Local
import routes from 'routes'

const PORT = process.env.PORT || 9999

// Apollo server
const apolloServer = new ApolloServer({
  modules: [
    require('./graphql/nutrient_foods'),
    require('./graphql/foods'),
    require('./graphql/nutrients'),
  ],
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

apolloServer.start().then((res) => {
  apolloServer.applyMiddleware({ app })
  console.log(
    `Visit http://${config.db.host}:${PORT}/graphql/ to access GraphQL Query Builder`
  )
})

// Routes
app.use('/', routes)
