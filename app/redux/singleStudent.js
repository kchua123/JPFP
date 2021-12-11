import axios from 'axios'

const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT'

export const setSingleStudent = (student) => {
  return {
    type: SET_SINGLE_STUDENT,
    student
  }
};

export const fetchSingleStudent = (id) => {
  return async (dispatch) => {
    try {
        const {data: student} = await axios.get(`/api/students/${id}`)
        dispatch(setSingleStudent(student))
    } catch (err) {
        console.log('SINGLESTUDENT THUNK ERROR: ', err)
    }
  }
};

export default function studentReducer(state = [], action) {
  switch (action.type) {
    case SET_SINGLE_STUDENT:
      return action.student
    default:
      return state;
  }
}
