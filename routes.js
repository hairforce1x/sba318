const express = require('express')
const router = express.Router()
const golfers = require('./data/golfers')

router.get('/', (req, res) => {
    console.log(golfers)
    res.send(golfers)
})

module.exports = router
