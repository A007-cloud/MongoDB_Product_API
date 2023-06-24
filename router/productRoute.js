const express = require('express');
const router = express.router();
const storePorduct = require('../controller/product');

//routers
router.route('/save').post(storePorduct);

module.exports = router;
