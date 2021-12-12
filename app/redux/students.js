import axios from 'axios'

const SET_STUDENTS = 'SET_STUDENTS'
const ADD_STUDENT = 'ADD_STUDENT'

export const setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students
  }
};

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student
  };
};

export const fetchStudents = () => {
  return async (dispatch) => {
    try {
        const {data: students} = await axios.get('/api/students')
        dispatch(setStudents(students))
    } catch (err) {
        console.log('FETCHSTUDENTS THUNK ERROR: ', err)
    }
  }
};

export const addNewStudent = (student) => {
  return async (dispatch) => {
    try {
      const newStudent = await axios.post('/api/students', student);
      console.log('**RESPONSE.DATA FROM ADD STUDENT THUNK**', newStudent)
      dispatch(addStudent(newStudent.data));
    } catch (err) {
      console.log("ADD_NEW_STUDENT THUNK ERROR: ", err);
    }
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(state = [], action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...state, action.student]
    default:
      return state;
  }
}
