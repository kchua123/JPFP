import { combineReducers } from 'redux'
import campusesReducer from './campuses'
import studentsReducer from './students'
import campusReducer from './singleCampus'

const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  campus: campusReducer
})

export default appReducer
