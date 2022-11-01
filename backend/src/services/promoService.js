import db from '../models/index';

let createNewPromo = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Promotion.create({
                voucher_code: data.voucher_code,
                desc: data.desc,
                quantity: data.quantity,
                create_at: Date.now(),
                voucher_percent: data.voucher_percent
            })
            resolve('success!');
        } catch (e) {
            reject(e);
        }
    })
}

let getAllPromo = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let promos = await db.Promotion.findAll({
                raw: true,
            });
            resolve(promos)
        } catch (e) {
            reject(e)
        }
    })
}

let getPromoInfoByID = (promoID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let promo = await db.Promotion.findOne({
                raw: true,
                where: { id: promoID }
            })

            if (promo) {
                resolve(promo);
            } else {
                resolve([]);
            }

        } catch (e) {
            reject(e);
        }
    })
}

let updatePromo = (data) => {
    console.log(data);
    console.log('data service');

    return new Promise(async (resolve, reject) => {
        try {
            let promo = await db.Promotion.findOne({
                where: { id: data.id }
            })
            if (promo) {

                promo.voucher_code = data.voucher_code
                promo.desc = data.desc
                promo.quantity = data.quantity
                promo.voucher_percent = data.voucher_percent

                await promo.save();

                let allPromos = await db.Promotion.findAll();
                resolve(allPromos);
            } else {
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deletePromoByID = (promoID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let promo = await db.Promotion.findOne({
                where: { id: promoID }
            })
            if (promo) {
                await promo.destroy();
            }

            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewPromo: createNewPromo,
    getAllPromo: getAllPromo,
    getPromoInfoByID: getPromoInfoByID,
    updatePromo: updatePromo,
    deletePromoByID: deletePromoByID
}