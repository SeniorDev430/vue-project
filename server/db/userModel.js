const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
    username: Joi.string().min(5).max(30).required(),
    email: Joi.string().email().min(5).max(50).optional(), 
    date_of_birth: Joi.date().optional(),
    password: Joi.string().required(),
    created_At: Joi.date(),
    updated_At: Joi.date()
});

const User = db.get('users');

function findAll() {
    return User.find();
}

function create(param) {
    const result = Joi.validate(param, schema);
    if (result.error == null) {
        param.created_At = new Date();
        return User.insert(user);
    } else {
        return Promise.reject(result.error);
    }
}

function update(param) {

}

function find(email) {
    return User.findOne({ email: email });
}

module.exports = {
    create,
    update,
    find,
    findAll
};