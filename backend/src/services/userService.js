import db from '../models/index';
import bcrypt from 'bcrypt';
import user from '../models/user';
import { reject } from 'lodash';

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            let hashDone = await hashuserPassWord(data.password);
            await db.User.create({
                username: data.username,
                password: hashDone,
                first_name: data.first_name,
                last_name: data.last_name,
                telephone: data.telephone,
                email: data.email,
                gender: data.gender === '1' ? true : false
            })
            resolve('success!');
        } catch (e) {
            reject(e);
        }
    })
}

let hashuserPassWord = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassWord = await bcrypt.hashSync(password, salt);
            resolve(hashPassWord);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUser = () => {

    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true,
            });
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}

let getUserInfoByID = (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                raw: true,
                where: { id: userID }
            })

            if (user) {
                resolve(user);
            } else {
                resolve([]);
            }

        } catch (e) {
            reject(e);
        }
    })
}

let updateUser = (data) => {
    console.log(data);
    console.log('data service');

    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.username = data.username
                user.first_name = data.first_name
                user.last_name = data.last_name
                user.gender = data.gender === '1' ? true : false
                user.email = data.email
                user.telephone = data.telephone

                await user.save();

                let allUsers = await db.User.findAll();
                resolve(allUsers);
            } else {
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteUserByID = (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userID }
            })
            if (user) {
                await user.destroy();
            }

            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoByID: getUserInfoByID,
    updateUser: updateUser,
    deleteUserByID: deleteUserByID
}