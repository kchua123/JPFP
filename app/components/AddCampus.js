import React from "react";
import { connect } from "react-redux";
import { addNewCampus } from "../redux/campuses";

export class AddCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
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
    this.props.addCampus({ ...this.state });
    this.setState({
      name: "",
      address: "",
    });
  }

  render() {
    return (
      <div className="add-form">
        <h4>Add New Campus:</h4>
        <form id="add-campus-form" onSubmit={this.submitHandler}>
          <label htmlFor="name">Campus Name: </label>
          <input
            name="name"
            onChange={this.changeHandler}
            value={this.state.name}
          />

          <label htmlFor="address">Campus Address: </label>
          <input
            name="address"
            onChange={this.changeHandler}
            value={this.state.address}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addNewCampus(campus)),
  };
};

export default connect(null, mapDispatch)(AddCampus);
