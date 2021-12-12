import React from "react";
import { connect } from "react-redux";
import { fetchSingleCampus } from "../redux/singleCampus";
import { fetchCampusStudents } from "../redux/singleCampus";
import { Link } from 'react-router-dom'

export class SingleCampus extends React.Component {
  componentDidMount() {
    this.props.getCampus(this.props.match.params.campusId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.campus.name !== prevProps.campus.name){
  this.props.getStudents(this.props.match.params.campusId);
    }
}

  render() {
    console.log("THIS.PROPS.CAMPUS", this.props.campus);
    console.log("THIS.PROPS.CAMPUS.STUDENTS", this.props.campus.students);
    console.log("NEW RENDER!!!");
    return (
      <div>
        <h2>{this.props.campus.name}</h2>
        <img src={this.props.campus.imageUrl} />
        <h4>Location: {this.props.campus.address}</h4>
        <h4>Description: {this.props.campus.description}</h4>
        <h4>Students:</h4>
        <div>
          {this.props.campus.students
            ? this.props.campus.students.map((student) => {
                return (
                  <Link to={`/students/${student.id}`} key={student.id}>
                  <div key={student.id}>{student.firstName} {student.lastName}</div>
                  </Link>
                )
              })
            : <h5>No students currently enrolled!</h5>}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("STATE.CAMPUS: ", state.campus);
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCampus: (id) => dispatch(fetchSingleCampus(id)),
    getStudents: (id) => dispatch(fetchCampusStudents(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleCampus);
