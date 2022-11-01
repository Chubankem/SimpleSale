import db from '../models/index';

let createNewCategory = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product_category.create({
                name: data.Categoryname,
                desc: data.Description
            })
            resolve('ok! work')
        } catch (e) {
            reject(e);
        }
    })
    // console.log('data from service')
    // console.log(data)
    // console.log(hashPasswordFromBcrypt)
}
let getAllCategory = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let category = db.Product_category.findAll({
                raw: true,
            });
            reslove(category)
        } catch (e) {
            reject(e)
        }
    })
}
let getCategoryInfoByID = (categoryId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Product_category.findOne({
                where: { id: categoryId },
                raw: true,
            })
            if (category) {
                resolve(category)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e)
        }
    })
}
let updateCategoryData = (data) => {
    console.log('data from service')
    console.log(data)
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Product_category.findOne({
                where: { id: data.id }
            })
            if (category) {
                category.name = data.Categoryname;
                category.desc = data.Description;


                await category.save();
                resolve();
            } else {
                resolve();
            }
            await db.Product_category.update({

            })
        } catch (e) {
            reject(e)
        }
    })
}
let deleteCategoryById = (categoryId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let cateory = await db.Product_category.findOne({
                where: { id: categoryId }
            })
            if (cateory) {
                await cateory.destroy();

            } resolve();
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createNewCategory: createNewCategory,
    getAllCategory: getAllCategory,
    getCategoryInfoByID: getCategoryInfoByID,
    updateCategoryData: updateCategoryData,
    deleteCategoryById: deleteCategoryById,
}