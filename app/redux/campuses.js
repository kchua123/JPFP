import axios from 'axios'

const SET_CAMPUSES = 'SET_CAMPUSES'

export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses
  }
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

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
}
