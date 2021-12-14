import React from "react";
import { connect } from "react-redux";
import {
  setSingleCampus,
  fetchSingleCampus,
  updateACampus,
} from "../redux/singleCampus";

export class UpdateCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      description: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.campus !== this.props.campus) {
      this.setState({
        name: this.props.campus.name || "",
        address: this.props.campus.address || "",
        description: this.props.campus.description || "",
      });
    }
  }

  componentDidMount() {
    this.props.getCampus(this.props.campus.id);
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.updateCampus({ ...this.props.campus, ...this.state });
    this.setState({
      name: "",
      address: "",
      description: "",
    });
  }

  render() {
    return (
      <div className="update-form" >
        <h4>Update Campus Details:</h4>
        <form onSubmit={this.submitHandler}>
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

          <label htmlFor="description">Campus Description: </label>
          <input
            name="description"
            onChange={this.changeHandler}
            value={this.state.description}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => ({
  campus: state.campus,
});

const mapDispatch = (dispatch) => {
  return {
    updateCampus: (campus) => dispatch(updateACampus(campus)),
    getCampus: (id) => dispatch(fetchSingleCampus(id)),
    clearCampus: () => dispatch(setSingleCampus({})),
  };
};

export default connect(mapState, mapDispatch)(UpdateCampus);
