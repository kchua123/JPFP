import React from "react";
import { connect } from "react-redux";
import { fetchSingleStudent } from "../redux/singleStudent";
import { fetchSingleCampus } from "../redux/singleCampus";

export class SingleStudent extends React.Component {
  componentDidMount() {
    this.props.getStudent(this.props.match.params.studentId);
  }

  componentDidUpdate(prevProps) {
      if (this.props.student.campusId !== prevProps.student.campusId){
    this.props.getCampus(this.props.student.campusId);
      }
  }

  render() {
        console.log('NEW RENDER!!!!')
      console.log('this.props.student.campusId: ', this.props.student.campusId)
      console.log('THIS.PROPS.STUDENT: ', this.props.student)
    return (
      <div>
        <h2>{this.props.student.firstName} {this.props.student.lastName}</h2>
        <img src={this.props.student.imageUrl} />
        <h4>Email: {this.props.student.email}</h4>
        <h4>GPA: {this.props.student.gpa}</h4>
        <h4>Campus: {this.props.campus.name ? this.props.campus.name : <div>No campus assigned!</div>}</h4>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
    campus: state.campus
  };
};

const mapDispatch = (dispatch) => {
  return {
    getStudent: (id) => dispatch(fetchSingleStudent(id)),
    getCampus: (id) => dispatch(fetchSingleCampus(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleStudent);
