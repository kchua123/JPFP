import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from '../redux/students'

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.getStudents()
  }
  render() {
    return (
      <div>
        {this.props.students.map(student => {
          return (
            <div key={student.id}>
            <h2>{student.firstName} {student.lastName}</h2>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    students: state.students
  };
};

const mapDispatch = (dispatch) => {
  return {
    getStudents: () => dispatch(fetchStudents())
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
