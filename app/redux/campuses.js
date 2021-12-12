import axios from 'axios'

const SET_CAMPUSES = 'SET_CAMPUSES'
const ADD_CAMPUS = "ADD_CAMPUS";

export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses
  }
};

export const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    campus
  };
};

export const fetchCampuses = () => {
  return async (dispatch) => {
    try {
        const {data: campuses} = await axios.get('/api/campuses')
        dispatch(setCampuses(campuses))
    } catch (err) {
        console.log('THUNK ERROR: ', err)
    }
  }
};

export const addNewCampus = (campus) => {
  return async (dispatch) => {
    try {
      const newCampus = await axios.post('/api/campuses', campus);
      console.log('**RESPONSE.DATA FROM ADD CAMPUS THUNK**', newCampus)
      dispatch(addCampus(newCampus.data));
    } catch (err) {
      console.log("ADD_NEW_CAMPUS THUNK ERROR: ", err);
    }
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      return [...state, action.campus]
    default:
      return state;
  }
}
