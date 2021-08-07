var express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const messageController = require('./controllers/messageController');
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');


// Home page route.
router.get('/', homeController.Index);

// Auth router
router.post('/login', authController.login);
router.post('/register', authController.register);

router.get('/messages', messageController.getAll);

module.exports = router;