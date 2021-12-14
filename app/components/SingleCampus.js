import React from "react";
import { connect } from "react-redux";
import { fetchSingleCampus, fetchCampusStudents } from "../redux/singleCampus";
import { Link } from "react-router-dom";
import UpdateCampus from "./UpdateCampus";

export class SingleCampus extends React.Component {
  componentDidMount() {
    this.props.getCampus(this.props.match.params.campusId);
    this.props.getStudents(this.props.match.params.campusId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.campus.name !== prevProps.campus.name) {
      this.props.getStudents(this.props.match.params.campusId);
    }
    if (this.props.campus.address !== prevProps.campus.address) {
      this.props.getStudents(this.props.match.params.campusId);
    }
    if (this.props.campus.description !== prevProps.campus.description) {
      this.props.getStudents(this.props.match.params.campusId);
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.campus.name}</h2>
        <img src={this.props.campus.imageUrl} />
        <h4>Location: {this.props.campus.address}</h4>
        <h4>Description: {this.props.campus.description}</h4>
        <h4>Students:</h4>
        <div>
          {this.props.campus.students ? (
            this.props.campus.students.map((student) => {
              return (
                <div key={student.id}>

                      {student.firstName} {student.lastName}

                </div>
              );
            })
          ) : (
            <h5>No students currently enrolled!</h5>
          )}
        </div>
        <div>
          <UpdateCampus />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
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
