import db from '../models/index';

let getAllCategory = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Product_category.findAll({
                raw: true
            })

            if (category) {
                resolve(category);
            } else {
                resolve([]);
            }

        } catch (e) {
            reject(e);
        }
    })
}

let createNewProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product.create({
                category_id: data.category_id,
                name: data.name,
                desc: data.desc,
                price: data.price,
                inventory_id: null,
                discount_id: null

            })
            resolve('success!');
        } catch (e) {
            reject(e);
        }
    })
}

let getAllProduct = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = await db.Product.findAll({
                raw: true,
            });
            resolve(products)
        } catch (e) {
            reject(e)
        }
    })
}

let getProductInfoByID = (productID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                raw: true,
                where: { id: productID }
            })

            if (product) {
                resolve(product);
            } else {
                resolve([]);
            }

        } catch (e) {
            reject(e);
        }
    })
}

let updateProduct = (data) => {
    console.log(data);
    console.log('data service');

    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                where: { id: data.id }
            })
            if (product) {
                product.name = data.name
                product.desc = data.desc
                product.price = data.price

                await product.save();

                let allProducts = await db.Product.findAll();
                resolve(allProducts);
            } else {
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteProductByID = (productID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                where: { id: productID }
            })
            if (product) {
                await product.destroy();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    getAllCategory: getAllCategory,
    createNewProduct: createNewProduct,
    getAllProduct: getAllProduct,
    getProductInfoByID: getProductInfoByID,
    updateProduct: updateProduct,
    deleteProductByID: deleteProductByID
}
