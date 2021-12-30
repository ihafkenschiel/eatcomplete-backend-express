import { gql } from 'apollo-server-express'
// Local
import db from '../sequelize'

export const typeDefs = gql`
  extend type Query {
    foods(take: Int, skip: Int): [Food]
    numFoods: Int
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
    numFoods: async () => {
      const result = await db.foods.count()
      return result
    },
    food: async (_, args) => db.foods.findByPk(args.id),
  },
}
