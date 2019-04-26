const express = require('express');
const router = express.Router()
const path = require('path')

const rouOne =  router.get('/',function (req, res, next) {
    res.sendFile(path.resolve(__dirname,'../pages/one.html'))
})

module.exports = rouOne