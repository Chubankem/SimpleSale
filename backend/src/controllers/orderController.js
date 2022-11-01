import orderService from '../services/orderService';

let getListOrder = async (req, res) => {

    let data = await orderService.getAllOrder();



    return res.render('manage order/order.ejs', {
        listOrder: data
    });

}

module.exports = {
    getListOrder: getListOrder
}