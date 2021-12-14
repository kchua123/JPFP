import React from "react";
import { connect } from "react-redux";
import {
  setSingleStudent,
  fetchSingleStudent,
  updateAStudent,
} from "../redux/singleStudent";

export class UpdateStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.student !== this.props.student) {
      this.setState({
        firstName: this.props.student.firstName || "",
        lastName: this.props.student.lastName || "",
        email: this.props.student.email || "",
      });
    }
  }

  componentDidMount() {
    this.props.getStudent(this.props.student.id);
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.updateStudent({ ...this.props.student, ...this.state });
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Update Student Details:</h3>
        <form id="update-student-form" onSubmit={this.submitHandler}>
          <label htmlFor="firstName">Student First Name: </label>
          <input
            name="firstName"
            onChange={this.changeHandler}
            value={this.state.firstName}
          />

          <label htmlFor="lastName">Student Last Name: </label>
          <input
            name="lastName"
            onChange={this.changeHandler}
            value={this.state.lastName}
          />

          <label htmlFor="email">Student Email: </label>
          <input
            name="email"
            onChange={this.changeHandler}
            value={this.state.email}
          />

          <button type="submit">Submit</button>
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
    updateStudent: (student) => dispatch(updateAStudent(student)),
    getStudent: (id) => dispatch(fetchSingleStudent(id)),
  };
};

export default connect(mapState, mapDispatch)(UpdateStudent);
