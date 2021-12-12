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

  studentRouter.get("/:studentId", async (req, res, next) => {
    try {
      let student = await Student.findByPk(req.params.studentId);
      res.send(student);
    } catch (err) {
      next(err);
    }
  });

  studentRouter.post('/', async (req, res, next) => {
    try {
      res.send(await Student.create(req.body));
    } catch (error) {
      next(error);
    }
  });
  
module.exports = studentRouter