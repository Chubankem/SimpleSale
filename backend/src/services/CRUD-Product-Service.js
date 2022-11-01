import db from '../models/index';
//Product_Ingredient
let createNewIngredient = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product_ingredient.create({
                name: data.Ingredient,
                ingre_quantity: data.Quantity
            })
            resolve('ok! work')
            console.log(data)
        } catch (e) {
            reject(e);
        }
    })
}
let getAllIngredient = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let ingredients = await db.Product_ingredient.findAll({
                raw: true,
            });
            reslove(ingredients)
        } catch (e) {
            reject(e)
        }
    })
}
let getIngredientInfoByID = (incredientId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ingredient = await db.Product_ingredient.findOne({
                where: { id: incredientId },
                raw: true,
            })
            if (ingredient) {
                resolve(ingredient)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e)
        }
    })
}
let updateIngredientData = (data) => {
    console.log('data from service')
    console.log(data)
    return new Promise(async (resolve, reject) => {
        try {
            let ingredient = await db.Product_ingredient.findOne({
                where: { id: data.id }
            })
            if (ingredient) {
                ingredient.ingre_quantity = data.Quantity;


                await ingredient.save();
                resolve();
            } else {
                resolve();
            }
            await db.Product_ingredient.update({

            })
        } catch (e) {
            reject(e)
        }
    })
}
let deleteIngredientById = (incredientId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ingredient = await db.Product_ingredient.findOne({
                where: { id: incredientId }
            })
            if (ingredient) {
                await ingredient.destroy();

            } resolve();
        } catch (e) {
            reject(e)
        }
    })
}

//Product_Recipe

// let createNewRecipe = async (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             await db.Product_recipe.create({
//                 product_id: data.Product_id, //Product_id = name in html
//                 ingredient_id: data.Ingredient_id,
//                 ingre_amount: data.Ingre_amount
//             })
//             resolve('ok! work')
//             console.log(data)
//         } catch (e) {
//             reject(e);
//         }
//     })
// }


module.exports = {
    createNewIngredient: createNewIngredient,
    getAllIngredient: getAllIngredient,
    getIngredientInfoByID: getIngredientInfoByID,
    updateIngredientData: updateIngredientData,
    deleteIngredientById: deleteIngredientById,


    // createNewRecipe: createNewRecipe,
    // getAllRecipe: getAllRecipe,
    // getRecipeInfoByID: getRecipeInfoByID,
    // updateRecipeData: updateRecipeData,
    // deleteRecipeById: deleteRecipeById,
}