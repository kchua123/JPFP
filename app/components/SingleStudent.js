import React from "react";
import { connect } from "react-redux";
import { fetchSingleStudent } from "../redux/singleStudent";
import { fetchSingleCampus } from "../redux/singleCampus";
import UpdateStudent from "./UpdateStudent";
import { Link } from "react-router-dom";

export class SingleStudent extends React.Component {
  componentDidMount() {
    this.props.getStudent(this.props.match.params.studentId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.student.id !== prevProps.student.id) {
      this.props.getCampus(this.props.student.campusId);
    }
  }

  render() {
    return (
      <div>
        <h2>
          {this.props.student.firstName} {this.props.student.lastName}
        </h2>
        <img src={this.props.student.imageUrl} />
        <h5>Email: {this.props.student.email}</h5>
        <h5>GPA: {this.props.student.gpa}</h5>
        <h5>
          Campus:{" "}
          {this.props.campus.name ? (
    
            <div>
              {this.props.campus.name}
            </div>

          ) : (
            <div>No campus assigned!</div>
          )}
        </h5>
        <div>
          <UpdateStudent />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getStudent: (id) => dispatch(fetchSingleStudent(id)),
    getCampus: (id) => dispatch(fetchSingleCampus(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleStudent);
