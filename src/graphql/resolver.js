import { recipes } from "../data/kitchenrecipes"

export const resolvers = {
    Query: {
        findAllRecipes: () => recipes,
    },
};