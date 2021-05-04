import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query {
        findAllRecipes: [Recipe]
        findRecipesByName(name : String): [Recipe]
        getDetailByRecipeId(id : Int!): Recipe
        getBetters: [Recipe]
        getWorstes: [Recipe]
    }

    type Mutation {
        sendScore(id : Int!, score: Float!): Recipe
    }

    type Recipe {
        _id: Int
        name: String
        description: String
        curiosities: [String]
        averageScore: Float
        scores: [Int]
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