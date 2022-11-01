import db, { sequelize } from '../models/index';

let createNewRecipe = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            let asd = data.Productid;

            console.log(asd);

            await sequelize.query("exec findRecipeID ?,?,?", {
                replacements: [data.Productid, data.Ingredientid, data.Ingreamount]
            });
            resolve('ok! work')
        } catch (e) {
            reject(e);
        }
    })
    // console.log('data from service')
    // console.log(data)
    // console.log(hashPasswordFromBcrypt)
}
let getAllRecipe = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let recipe = db.Product_recipe.findAll({
                raw: true,
            });
            reslove(recipe)
        } catch (e) {
            reject(e)
        }
    })
}
let getRecipeInfoByID = (recipeId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let recipe = await db.Product_recipe.findOne({
                where: { id: recipeId },
                raw: true,
            })
            if (recipe) {
                resolve(recipe)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e)
        }
    })
}
let updateRecipeData = (data) => {
    console.log('data from service')
    console.log(data)
    return new Promise(async (resolve, reject) => {
        try {
            let recipe = await db.Product_recipe.findOne({
                where: { id: data.id }
            })
            if (recipe) {
                recipe.product_id = data.Productid;
                recipe.ingredient_id = data.Ingredientid;
                recipe.ingre_amount = data.Ingreamount;


                await recipe.save();
                resolve();
            } else {
                resolve();
            }
            await db.Product_recipe.update({

            })
        } catch (e) {
            reject(e)
        }
    })
}
let deleteRecipeById = (recipeId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let recipe = await db.Product_recipe.findOne({
                where: { id: recipeId }
            })
            if (recipe) {
                await recipe.destroy();

            } resolve();
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createNewRecipe: createNewRecipe,
    getAllRecipe: getAllRecipe,
    getRecipeInfoByID: getRecipeInfoByID,
    updateRecipeData: updateRecipeData,
    deleteRecipeById: deleteRecipeById,
}