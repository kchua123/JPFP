import React from "react";
import { connect } from "react-redux";
import { fetchStudents, deleteStudent } from "../redux/students";
import { Link } from "react-router-dom";
import AddStudent from "./AddStudent";

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    return (
      <div id="student-list">
        {this.props.students.map((student) => {
          return (
            <div key={student.id}>
              <Link to={`/students/${student.id}`} key={student.id} style={{ textDecoration: 'none', color: "black" }}>
                <div key={student.id}>
                  <h4>
                    {student.firstName} {student.lastName}
                  </h4>
                </div>
              </Link>
              <form onSubmit={(event) => event.preventDefault()}>
                <button
                  className="remove"
                  onClick={() => this.props.deleteStudent(student.id)}
                >
                  Delete Student
                </button>
              </form>
            </div>
          );
        })}
        <div id="form"><AddStudent /></div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    students: state.students,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getStudents: () => dispatch(fetchStudents()),
    deleteStudent: (id) => dispatch(deleteStudent(id)),
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
