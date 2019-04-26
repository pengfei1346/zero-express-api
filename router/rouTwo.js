const express = require('express');
const router = express.Router()
const path = require('path')

const rouTwo =  router.get('/two',function (req, res, next) {
    res.sendFile(path.resolve(__dirname,'../pages/two.html'))
})

module.exports = rouTwo