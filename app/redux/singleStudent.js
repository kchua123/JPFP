import axios from "axios";

const SET_SINGLE_STUDENT = "SET_SINGLE_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";
const UNREGISTER_STUDENT = 'UNREGISTER_STUDENT'

export const setSingleStudent = (student) => {
  return {
    type: SET_SINGLE_STUDENT,
    student,
  };
};

export const updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student,
  };
};

export const unregisterStudent = (student) => {
  return {
    type: UNREGISTER_STUDENT,
    student,
  };
};

export const fetchSingleStudent = (id) => {
  return async (dispatch) => {
    try {
      const { data: student } = await axios.get(`/api/students/${id}`);
      dispatch(setSingleStudent(student));
    } catch (err) {
      console.log("SINGLESTUDENT THUNK ERROR: ", err);
    }
  };
};

export const updateAStudent = (student) => {
  return async (dispatch) => {
    try {
      const { data: updatedStudent } = await axios.put(
        `/api/students/${student.id}`,
        student
      );
      dispatch(updateStudent(updatedStudent));
    } catch (err) {
      console.log("UPDATE_STUDENT THUNK ERROR: ", err);
    }
  };
};

export const unregisterAStudent = (student) => {
  return async (dispatch) => {
    try {
      const { data: unregisteredStudent } = await axios.put(
        `/api/students/${student.id}`,
        student
      );
      dispatch(updateStudent(unregisteredStudent));
    } catch (err) {
      console.log("UNREGISTER_STUDENT THUNK ERROR: ", err);
    }
  };
};

export default function studentReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLE_STUDENT:
      return action.student;
    case UPDATE_STUDENT:
      return action.student;
    case UNREGISTER_STUDENT:
      return {...state, campusId: null};
    default:
      return state;
  }
}
