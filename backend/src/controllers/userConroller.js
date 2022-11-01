import userService from '../services/userService';

let getUser = (req, res) => {
    return res.render('manage user/user.ejs');
}

let getCreateUser = (req, res) => {

    return res.render('manage user/createuser.ejs')

}

let postCreateUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    console.log(message);
    return getListUser(req, res);
}

let getListUser = async (req, res) => {
    let data = await userService.getAllUser();

    console.log(data)
    return res.render('manage user/displayuser.ejs', {
        dataTable: data
    });
}

let getEditUser = async (req, res) => {

    let userID = req.query.id;

    if (userID) {
        let userData = await userService.getUserInfoByID(userID);

        console.log(userData);

        return res.render('manage user/edituser.ejs', {
            userData: userData
        });
    } else {
        return res.send('dit me ngu vkl');
    }
}

let putUser = async (req, res) => {
    let data = req.body;
    let allUsers = await userService.updateUser(data);
    return res.render('manage user/displayuser.ejs', {
        dataTable: allUsers
    })
}

let deleteUser = async (req, res) => {

    let id = req.query.id;
    if (id) {
        await userService.deleteUserByID(id);
        return getListUser(req, res);
    }
    return getListUser(req, res);

}

module.exports = {
    getCreateUser: getCreateUser,
    postCreateUser: postCreateUser,
    getListUser: getListUser,
    getEditUser: getEditUser,
    putUser: putUser,
    deleteUser: deleteUser,
    getUser: getUser
}