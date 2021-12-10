const express = require("express");
const campusRouter = express.Router();
const Campus = require("../db/campus");
const Student = require("../db/student");

campusRouter.get("/", async (req, res, next) => {
  try {
    let campuses = await Campus.findAll();
    res.send(campuses);
  } catch (err) {
    next(err);
  }
});

campusRouter.get("/:campusId", async (req, res, next) => {
  try {
    let campus = await Campus.findByPk(req.params.campusId);
    res.send(campus);
  } catch (err) {
    next(err);
  }
});

campusRouter.get('/:campusId/students', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      where: {
        campusId: req.params.campusId
      }
    })
    console.log('CONSOLE LOG STUDENTS FROM CAMPUSROUTER', students)
    res.send(students)
  }
  catch (error) {
    console.log("ROUTER ERROR FOR /:campusId/students")
    next(error)
  }
})

module.exports = campusRouter;
