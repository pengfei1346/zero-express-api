const express = require('express');
const router = express.Router()

//测试页面
const rouOne = require('./rouOne')
const rouTwo = require('./rouTwo')

router.use(rouOne)
router.use(rouTwo)

module.exports = router;
