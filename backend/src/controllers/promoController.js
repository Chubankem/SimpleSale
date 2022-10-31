import promoService from '../services/promoService';

let getPromo = (req, res) => {
    return res.render('manage promotion/promotion.ejs');
}

let getCreatePromo = (req, res) => {
    return res.render('manage promotion/createpromo.ejs');
}

let postCreatePromo = async (req, res) => {
    let message = await promoService.createNewPromo(req.body);
    console.log(message);
    return getListPromo(req, res);
}

let getListPromo = async (req, res) => {
    let data = await promoService.getAllPromo();

    console.log(data)
    return res.render('manage promotion/displaypromo.ejs', {
        dataTable: data
    });
}

let getEditPromo = async (req, res) => {

    let promoID = req.query.id;

    if (promoID) {
        let promoData = await promoService.getPromoInfoByID(promoID);

        console.log(promoData);

        return res.render('manage promotion/editpromo.ejs', {
            promoData: promoData
        });
    } else {
        return res.send('dit me ngu vkl');
    }
}

let putPromo = async (req, res) => {
    let data = req.body;
    let allPromos = await promoService.updatePromo(data);
    return res.render('manage promotion/displaypromo.ejs', {
        dataTable: allPromos
    })
}

let deletePromo = async (req, res) => {

    let id = req.query.id;
    if (id) {
        await promoService.deletePromoByID(id);
        return getListPromo(req, res);
    }
    return getListPromo(req, res);

}

module.exports = {
    getPromo: getPromo,
    getCreatePromo: getCreatePromo,
    postCreatePromo: postCreatePromo,
    getListPromo: getListPromo,
    getEditPromo: getEditPromo,
    putPromo: putPromo,
    deletePromo: deletePromo
}