const express = require('express')
const campusRouter = express.Router()
const Campus = require('../db/campus')

campusRouter.get('/', async (req, res, next) => {
    try {
      let campuses = await Campus.findAll()
      res.send(campuses)
    } catch (err) {
        next(err)
    }
  })

module.exports = campusRouter