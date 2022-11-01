import db from '../models/index';
//Product_Ingredient
let createNewProduct = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product.create({
                name: data.Productname,
                desc: data.Description,
                price: data.Price
            })
            resolve('ok! work')
            console.log(data)
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    createNewProduct: createNewProduct,
}