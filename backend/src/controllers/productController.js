import db from '../models/index';
import CRUDService from '../services/CRUDService';
import CRUDProductService from '../services/CRUD-Product-Service';
import CRUDRecipe from '../services/CRUD-Recipe';
import CRUDProduct from '../services/CRUDProduct';
import CRUDCategory from '../services/CRUDCategory';
import productService from '../services/productService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.Order.findAll();
        return res.render('homepage.ejs', { data: JSON.stringify(data) });
    } catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}
//CRUD User
let getCRUD = (req, res) => {
    return res.render('CRUD-user/crud.ejs');
}
let postCRUD = async (req, res) => {
    await CRUDService.createNewUser(req.body);
    return res.redirect("/display-get-crud")
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('--------------')
    console.log(data)
    console.log('--------------')
    return res.render('CRUD-user/displayCRUD.ejs', {
        dataTable: data
    })
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoByID(userId);
        console.log('--------------')
        console.log(userData)
        console.log('--------------')
        return res.render('CRUD-user/editCRUD.ejs', {
            user: userData
        })
    } else {
        return res.send('not found')
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    await CRUDService.updateUserData(data);
    return res.redirect("/display-get-crud")
}
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.redirect("/display-get-crud")
    } else {
        return res.send('not found')
    }
}
//CRUD Product
//CRUD Product-nguyenlieu
let getIngredient = (req, res) => {
    return res.render('CRUD-product/nguyenlieu/CreateNguyenLieu.ejs');
}
let postIngredient = async (req, res) => {
    await CRUDProductService.createNewIngredient(req.body);
    return res.redirect("/display-ingredient")
}
let displayGetIngredient = async (req, res) => {
    let data = await CRUDProductService.getAllIngredient();
    console.log('--------------')
    console.log(data)
    console.log('--------------')
    return res.render('CRUD-product/nguyenlieu/displayNguyenLieu.ejs', {
        dataTable: data
    })
}
let getEditIncredient = async (req, res) => {
    let ingredientId = req.query.id;
    if (ingredientId) {
        let ingredientData = await CRUDProductService.getIngredientInfoByID(ingredientId);
        console.log('--------------')
        console.log(ingredientData)
        console.log('--------------')
        return res.render('CRUD-product/nguyenlieu/editNguyenLieu.ejs', {
            ingredient: ingredientData
        })
    } else {
        return res.send('not found')
    }
}
let putIncredient = async (req, res) => {
    let data = req.body;
    await CRUDProductService.updateIngredientData(data);
    return res.redirect("/display-ingredient")
}
let deleteIncredient = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDProductService.deleteIngredientById(id);
        return res.redirect("/display-ingredient")
    } else {
        return res.send('not found')
    }
}
//CRUD Product-congthuc
let getRecipe = (req, res) => {
    return res.render('CRUD-product/congthuc/CreateCongThuc.ejs');
}
let postRecipe = async (req, res) => {

    console.log(req.body);

    await CRUDRecipe.createNewRecipe(req.body);
    return res.redirect("/display-recipe")
}
let displayGetRecipe = async (req, res) => {
    let data = await CRUDRecipe.getAllRecipe();
    console.log('--------------')
    console.log(data)
    console.log('--------------')
    return res.render('CRUD-product/congthuc/displayCongThuc.ejs', {
        dataTable: data
    })
}
let getEditRecipe = async (req, res) => {
    let recipeId = req.query.id;
    if (recipeId) {
        let recipeData = await CRUDRecipe.getRecipeInfoByID(recipeId);
        console.log('--------------')
        console.log(recipeData)
        console.log('--------------')
        return res.render('CRUD-product/congthuc/editCongThuc.ejs', {
            recipe: recipeData
        })
    } else {
        return res.send('not found')
    }
}
let putRecipe = async (req, res) => {
    let data = req.body;
    await CRUDRecipe.updateRecipeData(data);
    return res.redirect("/display-recipe")
}
let deleteRecipe = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDRecipe.deleteRecipeById(id);
        return res.redirect("/display-recipe")
    } else {
        return res.send('not found')
    }
}
//CRUD Product
let getProduct = (req, res) => {
    return res.render('CRUD-product/thucan/CreateThucAn.ejs');
}
let postProduct = async (req, res) => {
    await CRUDProduct.createNewProduct(req.body);
    return res.send('word!!!')
}
//Category
let getCategory = (req, res) => {
    return res.render('CRUD-product/category/CreateCategory.ejs');
}
let postCategory = async (req, res) => {

    console.log(req.body);

    await CRUDCategory.createNewCategory(req.body);
    return res.redirect("/display-category")
}
let displayGetCategory = async (req, res) => {
    let data = await CRUDCategory.getAllCategory();
    console.log('--------------')
    console.log(data)
    console.log('--------------')
    return res.render('CRUD-product/category/displayCategory.ejs', {
        dataTable: data
    })
}
let getEditCategory = async (req, res) => {
    let categoryId = req.query.id;
    if (categoryId) {
        let categoryData = await CRUDCategory.getCategoryInfoByID(categoryId);
        console.log('--------------')
        console.log(categoryData)
        console.log('--------------')
        return res.render('CRUD-product/category/editCategory.ejs', {
            category: categoryData
        })
    } else {
        return res.send('not found')
    }
}
let putCategory = async (req, res) => {
    let data = req.body;
    await CRUDCategory.updateCategoryData(data);
    return res.redirect("/display-category")
}
let deleteCategory = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDCategory.deleteCategoryById(id);
        return res.redirect("/display-category")
    } else {
        return res.send('not found')
    }
}

let getProDuct = async (req, res) => {
    let categoryData = await productService.getAllCategory();
    console.log(categoryData);
    res.render('manage product/createproduct.ejs', {
        dataTable: categoryData
    });
}

let postCreateProduct = async (req, res) => {
    let message = await productService.createNewProduct(req.body);
    console.log(message);
    return getListProduct(req, res);
}

let getListProduct = async (req, res) => {
    let data = await productService.getAllProduct();

    console.log(data)
    return res.render('manage product/displayproduct.ejs', {
        dataTable: data
    });
}

let getEditProduct = async (req, res) => {
    let productID = req.query.id;

    if (productID) {
        let productData = await productService.getProductInfoByID(productID);

        console.log(productData);

        return res.render('manage product/editproduct.ejs', {
            productData: productData
        });
    } else {
        return res.send('dit me ngu vkl');
    }
}

let putProduct = async (req, res) => {
    let data = req.body;
    let allProducts = await productService.updateProduct(data);
    return res.render('manage product/displayproduct.ejs', {
        dataTable: allProducts
    })
}

let deleteProduct = async (req, res) => {

    let id = req.query.id;
    if (id) {
        await productService.deleteProductByID(id);
        return getListProduct(req, res);
    }
    return getListProduct(req, res);
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    //user
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
    //product-Ingredient
    getIngredient: getIngredient,
    postIngredient: postIngredient,
    displayGetIngredient: displayGetIngredient,
    getEditIncredient: getEditIncredient,
    putIncredient: putIncredient,
    deleteIncredient: deleteIncredient,
    //product-recipe
    getRecipe: getRecipe,
    postRecipe: postRecipe,
    displayGetRecipe: displayGetRecipe,
    getEditRecipe: getEditRecipe,
    putRecipe: putRecipe,
    deleteRecipe: deleteRecipe,

    //product
    getProduct: getProduct,
    postProduct: postProduct,
    //Category
    getCategory: getCategory,
    postCategory: postCategory,
    displayGetCategory: displayGetCategory,
    getEditCategory: getEditCategory,
    putCategory: putCategory,
    deleteCategory: deleteCategory,

    getProDuct: getProDuct,
    postCreateProduct: postCreateProduct,
    getListProduct: getListProduct,
    getEditProduct: getEditProduct,
    putProduct: putProduct,
    deleteProduct: deleteProduct
}