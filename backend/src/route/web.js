import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/display-get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.get('/create-ingredient', homeController.getIngredient);
    router.post('/post-create-ingredient', homeController.postIngredient);
    router.get('/display-ingredient', homeController.displayGetIngredient);
    router.get('/edit-ingredient', homeController.getEditIncredient);
    router.post('/put-ingredient', homeController.putIncredient);
    router.get('/delete-ingredient', homeController.deleteIncredient);

    router.get('/create-recipe', homeController.getRecipe);
    router.post('/post-create-recipe', homeController.postRecipe);
    router.get('/display-recipe', homeController.displayGetRecipe);
    router.get('/edit-recipe', homeController.getEditRecipe);
    router.post('/put-recipe', homeController.putRecipe);
    router.get('/delete-recipe', homeController.deleteRecipe);


    router.get('/create-product', homeController.getProduct);
    router.post('/post-create-product', homeController.postProduct);

    router.get('/create-category', homeController.getCategory);
    router.post('/post-create-category', homeController.postCategory);
    router.get('/display-category', homeController.displayGetCategory);
    router.get('/edit-category', homeController.getEditCategory);
    router.post('/put-category', homeController.putCategory);
    router.get('/delete-category', homeController.deleteCategory);

    return app.use("/", router);
}

module.exports = initWebRoutes;