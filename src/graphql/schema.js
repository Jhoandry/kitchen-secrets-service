import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query {
        findAllRecipes: [Recipe]
        findRecipesByName(name : String): [Recipe]
    }

    type Mutation {
        sendAverages(id : Int!, average: Float!): Recipe
    }

    type Recipe {
        _id: Int
        name: String
        description: String
        curiosities: [String]
        averageScore: Float
        averages: [Float]
        steps: [Step]
        ingredients: [Ingredient]
    }

    type Step {
        description: String
        order: Int
    }

    type Ingredient {
        name: String
        basePortion: String
        unit: String
    }
`;