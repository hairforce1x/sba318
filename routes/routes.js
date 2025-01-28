const express = require('express')
const router = express.Router()
const golfers = require('../data/golfers')
const courses = require('../data/courses')
const scores = require('../data/scores')

router.use(express.json())

router.get('/golfers', (req, res) => {
    console.log(golfers)
    res.send(golfers)
})

router.post('/golfers', (req,res) => {
    const { name } = req.body;
    const newPlayer = {
        id: golfers.length + 1,
        name,
    }
    golfers.push(newPlayer)
    res.status(200).send(newPlayer)
})

router.get('/courses', (req, res) => {
    console.log(courses)
    res.send(courses)
})

router.put('/courses/:id/par', (req, res) => {
    const courseId = parseInt(req.params.id);
    const { par } = req.body;
    const course = courses.find(course=>course.id === courseId);
    course.par = par;
    res.status(200).send(course)
})

router.get('/scores', (req, res) => {
    console.log(scores)
    res.send(scores)
})



module.exports = router
