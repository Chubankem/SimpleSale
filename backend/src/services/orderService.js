import db, { sequelize } from '../models/index';


let getAllOrder = async () => {

    // const results = await sequelize.query("SELECT (first_name + last_name) as [fullname],total_item,amount,[status] FROM [User],[Order],[Order_payment] WHERE [User].id = [Order].user_id and [Order].Payment_id = [Order_payment].id", { type: QueryTypes.SELECT });
    const results = await sequelize.query("exec getOrderForManage");
    const removemeta = results[0];

    return new Promise(async (resolve, reject) => {
        try {
            resolve(removemeta)
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    getAllOrder: getAllOrder
}