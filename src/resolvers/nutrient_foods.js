import { gql } from 'apollo-server-express'
// Local
import db from '../sequelize'

export const typeDefs = gql`
  extend type Query {
    nutrient_foods: [NutrientFood]
    nutrient_food(id: ID!): NutrientFood
  }
  type NutrientFood {
    id: ID!
    food_id: ID!
    food: Food
    nutrient_id: ID!
    nutrient: Nutrient
    quantity: Float
    quantity_measurement: String
    percent_rda: Float!
  }
`

export const resolvers = {
  Query: {
    nutrient_foods: async () => db.nutrient_foods.findAll(),
    nutrient_food: async (_, args) => db.nutrient_foods.findByPk(args.id),
  },
  NutrientFood: {
    food: async (obj) => db.foods.findByPk(obj.food_id),
    nutrient: async (obj) => db.nutrients.findByPk(obj.nutrient_id),
  },
}
