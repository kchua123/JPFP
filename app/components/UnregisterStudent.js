import React from "react";
import { connect } from "react-redux";
import {
  setSingleStudent,
  fetchSingleStudent,
  unregisterAStudent,
} from "../redux/singleStudent";

export class UnregisterStudent extends React.Component {
  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.props.getStudent(this.props.student.id);
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.unregisterStudent({ ...this.props.student, ...this.state });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => event.preventDefault()}>
                <button
                  className="unregister"
                  onClick={() => this.props.unregisterStudent({ ...this.props.student, ...this.state })}
                >
                  Unregister Student
                </button>
              </form>
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
});

const mapDispatch = (dispatch) => {
  return {
    getStudent: (id) => dispatch(fetchSingleStudent(id)),
    clearStudent: () => dispatch(setSingleStudent({})),
    unregisterStudent: () => dispatch(unregisterAStudent({})),
  };
};

export default connect(mapState, mapDispatch)(UnregisterStudent);
