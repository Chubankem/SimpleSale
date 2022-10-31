import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userConroller";
import promoController from "../controllers/promoController";
import orderController from "../controllers/orderController";

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