const router = require('express').Router();

const sequelize = require('../config/connection');

const { User } = require('../models');

router.get('/', (req, res) => {
    User.findAll().then((users) => {
        console.log(users[0]);
        res.render("home", {users: users});
    })
})

module.exports = router;