const express = require('express')
const router = express.Router()
const golfers = require('../data/golfers')

router.get('/golfers', (req, res) => {
    console.log(golfers)
    res.send(golfers)
})

router.get('')



module.exports = router
