import express from "express";
import productController from "../controllers/productController";
import userController from "../controllers/userConroller";
import promoController from "../controllers/promoController";
import orderController from "../controllers/orderController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', productController.getHomePage);
    router.get('/about', productController.getAboutPage);

    router.get('/crud', productController.getCRUD);
    router.post('/post-crud', productController.postCRUD);
    router.get('/display-get-crud', productController.displayGetCRUD);
    router.get('/edit-crud', productController.getEditCRUD);
    router.post('/put-crud', productController.putCRUD);
    router.get('/delete-crud', productController.deleteCRUD);

    {
        router.get('/create-ingredient', productController.getIngredient);
        router.post('/post-create-ingredient', productController.postIngredient);
        router.get('/display-ingredient', productController.displayGetIngredient);
        router.get('/edit-ingredient', productController.getEditIncredient);
        router.post('/put-ingredient', productController.putIncredient);
        router.get('/delete-ingredient', productController.deleteIncredient);
    }

    {
        router.get('/create-recipe', productController.getRecipe);
        router.post('/post-create-recipe', productController.postRecipe);
        router.get('/display-recipe', productController.displayGetRecipe);
        router.get('/edit-recipe', productController.getEditRecipe);
        router.post('/put-recipe', productController.putRecipe);
        router.get('/delete-recipe', productController.deleteRecipe);
    }

    {
        router.get('/create-product', productController.getProduct);
        router.post('/post-create-product', productController.postProduct);
    }

    {
        router.get('/create-category', productController.getCategory);
        router.post('/post-create-category', productController.postCategory);
        router.get('/display-category', productController.displayGetCategory);
        router.get('/edit-category', productController.getEditCategory);
        router.post('/put-category', productController.putCategory);
        router.get('/delete-category', productController.deleteCategory);
    }

    {
        router.get('/user', userController.getUser);

        router.get('/createuser', userController.getCreateUser);
        router.post('/post_createuser', userController.postCreateUser);

        router.get('/get_listuser', userController.getListUser);

        router.get('/edit_user', userController.getEditUser);
        router.post('/put_user', userController.putUser);

        router.get('/delete_user', userController.deleteUser);
    }

    {
        router.get('/promotion', promoController.getPromo);

        router.get('/createpromo', promoController.getCreatePromo);
        router.post('/post_createpromo', promoController.postCreatePromo);

        router.get('/get_listpromo', promoController.getListPromo);

        router.get('/edit_promo', promoController.getEditPromo);
        router.post('/put_promo', promoController.putPromo);

        router.get('/delete_promo', promoController.deletePromo);
    }

    {
        router.get('/order', orderController.getListOrder);
    }

    return app.use("/", router);
}

module.exports = initWebRoutes;