
import bcrypt from 'bcryptjs';
import db from '../models/index';

//create User
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.Password);
            await db.User.create({
                username: data.Username,
                password: hashPasswordFromBcrypt,
                first_name: data.Firstname,
                last_name: data.Lastname,
                telephone: data.Telephone,
                email: data.Email,
                gender: data.Gender === '1' ? true : false
            })
            resolve('ok! work')
        } catch (e) {
            reject(e);
        }
    })
    // console.log('data from service')
    // console.log(data)
    // console.log(hashPasswordFromBcrypt)
}
let hashUserPassword = (Password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(Password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

//display information
let getAllUser = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let users = db.User.findAll({
                raw: true,
            });
            reslove(users)
        } catch (e) {
            reject(e)
        }
    })
}

//edit info
let getUserInfoByID = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true,
            })
            if (user) {
                resolve(user)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e)
        }
    })
}
let updateUserData = (data) => {
    console.log('data from service')
    console.log(data)
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.email = data.Email;
                user.first_name = data.Firstname;
                user.last_name = data.Lastname;
                user.telephone = data.Telephone;

                await user.save();
                resolve();
            } else {
                resolve();
            }
            await db.User.update({

            })
        } catch (e) {
            reject(e)
        }
    })
}
let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })
            if (user) {
                await user.destroy();

            } resolve();
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoByID: getUserInfoByID,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById,
}

