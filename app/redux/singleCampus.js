import axios from 'axios'

const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS'
const SET_CAMPUS_STUDENTS = 'SET_CAMPUS_STUDENTS'

export const setSingleCampus = (campus) => {
  return {
    type: SET_SINGLE_CAMPUS,
    campus
  }
};

export const setCampusStudents = (students) => {
    return {
      type: SET_CAMPUS_STUDENTS,
      students
    }
}

export const fetchSingleCampus = (id) => {
  return async (dispatch) => {
    try {
        const {data: campus} = await axios.get(`/api/campuses/${id}`)
        dispatch(setSingleCampus(campus))
    } catch (err) {
        console.log('THUNK ERROR: ', err)
    }
  }
};

export const fetchCampusStudents = (id) => {
    return async (dispatch) => {
      try {
        const {data} = await axios.get(`/api/campuses/${id}/students`)
        dispatch(setCampusStudents(data))
      } catch (err) {
        console.log('FETCHCAMPUSSTUDENTS THUNK ERROR: ', err)
      }
    }
  }

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusReducer(state = [], action) {
  switch (action.type) {
    case SET_SINGLE_CAMPUS:
      return action.campus
    case SET_CAMPUS_STUDENTS:
        return {...state, students: action.students}
    default:
      return state;
  }
}
