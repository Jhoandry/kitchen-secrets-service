import { recipes } from "../data/kitchenrecipes"

export const resolvers = {
    Query: {
        findAllRecipes: () => recipes,
        findRecipesByName: (_, args) => {
            return recipes.filter( (element) => 
                element.name.toLowerCase().includes(args.name.toLowerCase())
            );
        },
    },
    Mutation: {
        sendAverages: (_, args) => {
            let recipe = recipes.find( (element) => element._id == args.id);
            recipe.averages.push(args.average)
            return recipe
        },
    }
};