import { gql } from 'apollo-server-express'
import db from '../sequelize'

export const typeDefs = gql`
  extend type Query {
    foods: [Food]
    food(id: ID!): Food
  }
  type Food {
    id: ID!
    name: String!
    weight: Int
    measure: String
  }
`

export const resolvers = {
  Query: {
    foods: async () => db.foods.findAll(),
    food: async (obj, args, context, info) => db.foods.findByPk(args.id),
  },
}
