import { gql } from 'apollo-server-express'
// Local
import db from '../sequelize'

export const typeDefs = gql`
  extend type Query {
    foods(take: Int, skip: Int): [Food]
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
    foods: async (_, args) => {
      const result = await db.foods.findAndCountAll({
        limit: args.take,
        offset: args.skip,
      })
      return result.rows
    },
    food: async (_, args) => db.foods.findByPk(args.id),
  },
}
