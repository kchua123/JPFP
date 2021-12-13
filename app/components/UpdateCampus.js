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
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.campus !== this.props.campus) {
      this.setState({
        name: this.props.campus.name || "",
        address: this.props.campus.address || "",
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
    console.log(
      "SUBMITHANDLER THIS.PROPS.CAMPUS: ",
      this.props.campus,
      "SUBMITHANDLER THIS.STATE: ",
      this.state
    );
    this.props.updateCampus({ ...this.props.campus, ...this.state });
    this.setState({
      name: "",
      address: "",
    });
  }

  render() {
    console.log("**NEW RENDER OF UPDATECAMPUS** ");
    console.log(
      "THIS.PROPS.CAMPUS AFTER UPDATECAMPUS RENDER",
      this.props.campus
    );
    return (
      <div>
        <h3>Update Campus Details:</h3>
        <form id="update-campus-form" onSubmit={this.submitHandler}>
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