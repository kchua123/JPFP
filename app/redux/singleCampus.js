import axios from "axios";

const SET_SINGLE_CAMPUS = "SET_SINGLE_CAMPUS";
const SET_CAMPUS_STUDENTS = "SET_CAMPUS_STUDENTS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";

export const setSingleCampus = (campus) => {
  return {
    type: SET_SINGLE_CAMPUS,
    campus,
  };
};

export const setCampusStudents = (students) => {
  return {
    type: SET_CAMPUS_STUDENTS,
    students,
  };
};

const updateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
    campus,
  };
};

export const fetchSingleCampus = (id) => {
  return async (dispatch) => {
    try {
      const { data: campus } = await axios.get(`/api/campuses/${id}`);
      console.log("SUCCESSFUL FETCH_SINGLE_CAMPUS THUNK", campus);
      dispatch(setSingleCampus(campus));
    } catch (err) {
      console.log("FETCH_SINGLE_CAMPUS THUNK ERROR: ", err);
    }
  };
};

export const fetchCampusStudents = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}/students`);
      dispatch(setCampusStudents(data));
    } catch (err) {
      console.log("FETCH_CAMPUS_STUDENTS THUNK ERROR: ", err);
    }
  };
};

export const updateACampus = (campus) => {
  return async (dispatch) => {
    try {
      const {data: updatedCampus} = await axios.put(
        `/api/campuses/${campus.id}`,
        campus
      );
      dispatch(updateCampus(updatedCampus));
    } catch (err) {
      console.log("UPDATE_CAMPUS THUNK ERROR: ", err);
    }
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLE_CAMPUS:
      return action.campus;
    case SET_CAMPUS_STUDENTS:
      return { ...state, students: action.students };
    case UPDATE_CAMPUS:
      return action.campus
    default:
      return state;
  }
}
