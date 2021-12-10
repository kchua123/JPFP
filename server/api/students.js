const express = require('express')
const studentRouter = express.Router()
const Student = require('../db/student')

studentRouter.get('/', async (req, res, next) => {
    try {
      let students = await Student.findAll()
      res.send(students)
    } catch (err) {
        next(err)
    }
  })

module.exports = studentRouter