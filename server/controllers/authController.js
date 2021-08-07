'use strict';
const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('../db/userModel');

class authController {
    login(req, res) {
        var user = userModel.find(req.body.email);
        if (err) return res.status(500).send({ message: 'Error on the server.' });
        if(!user) return res.status(400).send({ message: "The username does not exist" });
        if(!Bcrypt.compareSync(request.body.password, user.password)) return res.status(401).send({ auth: false, token: null });
        let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 43200 }); // expires in 24 hours
        res.status(200).send({ auth: true, token: token, user: user });
    }

    register(req, res) {
        request.body.password = Bcrypt.hashSync(request.body.password, 10);
        var result = userModel.create(req.body);
        console.log(result);
    }
}

module.exports = new authController();