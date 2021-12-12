import React from "react";
import { connect } from "react-redux";
import { addNewStudent } from "../redux/students";

export class AddStudent extends React.Component {
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

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.addStudent({ ...this.state });
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  render() {
    console.log("**NEW RENDER OF ADDSTUDENT** ");
    return (
      <div>
        <h3>Add New Student:</h3>
        <form id="add-student-form" onSubmit={this.submitHandler}>
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

const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addNewStudent(student)),
  };
};

export default connect(null, mapDispatch)(AddStudent);
