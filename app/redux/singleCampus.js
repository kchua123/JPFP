import axios from 'axios'

const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS'

export const setSingleCampus = (campus) => {
  return {
    type: SET_SINGLE_CAMPUS,
    campus
  }
};

export const fetchSingleCampus = (id) => {
  return async (dispatch) => {
    try {
        const {data: campus} = await axios.get(`/api/campuses/${id}`)
        dispatch(setSingleCampus(campus))
    } catch (err) {
        console.log('THUNK ERROR: ', err)
        console.log('CONSOLE LOG OF DATA: ', data)
    }
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusReducer(state = [], action) {
  switch (action.type) {
    case SET_SINGLE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
