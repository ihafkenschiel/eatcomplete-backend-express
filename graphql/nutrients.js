import { gql } from 'apollo-server-express'
import db from '../sequelize'

export const typeDefs = gql`
  extend type Query {
    nutrients(take: Int, skip: Int): [Nutrient]
    nutrient(id: ID!): Nutrient
  }
  type Nutrient {
    id: ID!
    name: String!
  }
`

export const resolvers = {
  Query: {
    nutrients: async (_, args) => {
      const result = await db.nutrients.findAndCountAll({
        limit: args.take,
        offset: args.skip,
      })
      return result.rows
    },
    nutrient: async (_, args) => db.nutrients.findByPk(args.id),
  },
}
