const db = require("../model");
const sequelize = db.sequelize;
const users = db.users;
const { validationResult } = require("express-validator");
module.exports = {
    //   getAll: (req, res) => {
    //     sequelize
    //       .query("select * from users", {
    //         replacements: [],
    //         type: Sequelize.SELECT,
    //       })
    //       .then((data) => {
    //         res.send(data[0]);
    //       })
    //       .catch((err) => {
    //         res.send(err);
    //       });
    //   },

    getAll: (req, res) => {
        users
            .findAll({})
            .then((users) => {
                res.send(users);
            })
            .catch((err) => {
                res.send(err);
            });
    },
    createUser: (req, res) => {

        let user = { Name: req.body.Name, mobile: req.body.mobile };
        users
            .create(user)
            .then((users) => {
                res.send(users);
            })
            .catch((err) => {
                res.send(err);
            });
    },
    updateUser: (req, res) => {
        let id = req.params.id;
        users.update({ mobile: req.body.mobile }, { where: { id: id } }).then((data) => {
            if (data > 0) {
                res.send({ error: false, message: "User updated" });
            } else {
                res.send({ error: false, message: "User not updated" });
            }

        }).catch((err) => {
            res.send(err);
        });
    },

    deleteUser: (req, res) => {
        let id = req.params.id;
        users.destroy({ where: { id: id } }).then((user) => {
            res.sendStatus(200);
        }).catch((err) => {
            res.send(err);
        });
    }
};