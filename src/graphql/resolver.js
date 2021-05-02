import { recipes } from "../data/kitchenrecipes"

export const resolvers = {
    Query: {
        findAllRecipes: () => recipes,
        findRecipesByName: (_, args) => {
            return recipes.filter( (element) => 
                element.name.toLowerCase().includes(args.name.toLowerCase())
            );
        },
        getDetailByRecipeId: (_, args) => {
            return recipes.find( (element) => element._id == args.id);
        },
        getBetters: () => {
            return recipes.filter( (element) => (element.averageScore >= 2.5));
        },
        getWorstes: () => {
            return recipes.filter( (element) => element.averageScore < 2.5);
        },
    },
    Mutation: {
        sendAverages: (_, args) => {
            let recipe = recipes.find( (element) => element._id == args.id);
            recipe.scores.push(args.score)
            var sumatoria = recipe.scores.reduce(function(a, b){ return a + b; }, 0);
            recipe.averageScore = sumatoria / recipe.scores.length;
            return recipe
        },
    }
};