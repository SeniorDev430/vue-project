'use strict';
const messageModel = require('../db/messageModel');

class messageController {

    getAll(req, res) {
        messageModel.getAll().then((messages) => {
            res.json(messages);
        });
    }
}
module.exports = new messageController();