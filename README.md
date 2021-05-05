<h1 align="left">
   	:arrow_forward:
    kitchen-secrets-service
</h1> 
<h5>  The main idea of this project serves as a backend to other apps, Exposing an endpoint to many clients where that can execute graphql queries to get kitchen recipes information. </h5>


## Available Queries

### Find recipes 

Return all recipes
  ```gql 
      {
        findAllRecipes {
          _id 
          name
          description
          averageScore
          curiosities
          steps {
            description,
            order
          }
          ingredients {
            unit,
            basePortion,
            name
          }
        }
      }
  ```

### Find recipes by filter

Return recipes applying filter on the name, Param is mandatory.
  ```gql 
      {
        findRecipesByName(name : "ca") {
          _id 
          name
          description
          averageScore
          curiosities
          steps {
            description,
            order
          }
          ingredients {
            unit,
            basePortion,
            name
          }
        }
      }
  ```
  
### Find recipe by Id

Return a kitchen recipe detail by Id. Param is mandatory.
  ```gql 
    {
      getDetailByRecipeId (id : 1) {
          _id 
          name
          description
          averageScore
          curiosities
          steps {
            description,
            order
          }
          ingredients {
            unit,
            basePortion,
            name
          }
      }
    }
  ```

### Get betters recipes by score

Return all recipes of score is upper to 2.4

  ```gql
      {
        getBetters {
          _id 
          name
          description
          averageScore
          curiosities
          steps {
            description,
            order
          }
          ingredients {
            unit,
            basePortion,
            name
          }
        }
      }
  ```

### Get worste recipes by score

Return all recipes of score is Lower to 2.4

  ```gql
      {
        getWorstes {
          _id 
          name
          description
          averageScore
          curiosities
          steps {
            description,
            order
          }
          ingredients {
            unit,
            basePortion,
            name
          }
        }
      }
  ```

### Send score by recipe

This function is add a new score on recipe and calculate average scobre of this. All params are mandatory.
  ```gql
    mutation {
      sendScore(id : 1, score: 2) {
          _id 
          name
          description
          averageScore
          curiosities
          steps {
            description,
            order
          }
          ingredients {
            unit,
            basePortion,
            name
          }
      }
    }
  ``` 

## Technical info

A barebones Node.js app using [Express](http://expressjs.com/). Used a graphQl with an Apollo client to provide all data.

### To Start on you local machine

You will need [npm](https://www.npmjs.com/) and [node](https://www.npmjs.com/package//node) installed globally on your machine. 

Clone down this repository: `git clone https://github.com/Jhoandry/kitchen-secrets-service.git`

Go to folder: `cd kitchen-secrets-service`

Installation: `npm install` 

To Start Server: `npm run start`   

Runs the app in the development mode.\
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to get queries and mutarions availables.

**🚨 IMPORTANT**

This project does not have a data base connection, to change or add a recipe you can modify [File](https://github.com/Jhoandry/kitchen-secrets-service/blob/main/src/data/kitchenrecipes.js).

Every time you start this server, all data to bee inicialice with this [File](https://github.com/Jhoandry/kitchen-secrets-service/blob/main/src/data/kitchenrecipes.js) data.
