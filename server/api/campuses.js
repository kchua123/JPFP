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
    res.send(students)
  }
  catch (error) {
    console.log("ROUTER ERROR FOR /:campusId/students")
    next(error)
  }
})

campusRouter.post('/', async (req, res, next) => {
  try {
    res.send(await Campus.create(req.body));
  } catch (error) {
    next(error);
  }
});

campusRouter.delete('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    await campus.destroy();
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

campusRouter.put('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    res.send(await campus.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = campusRouter;
