const express = require('express');
const { indexController } = require('../controllers/indexController');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();


router.get('/', isLoggedIn ,indexController);

module.exports = router;