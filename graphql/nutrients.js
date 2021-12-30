import { gql } from 'apollo-server-express'
import db from '../sequelize'

export const typeDefs = gql`
  extend type Query {
    nutrients: [Nutrient]
    nutrient(id: ID!): Nutrient
  }
  type Nutrient {
    id: ID!
    name: String!
  }
`

export const resolvers = {
  Query: {
    nutrients: async () => db.nutrients.findAll(),
    nutrient: async (obj, args) => db.nutrients.findByPk(args.id),
  },
}
