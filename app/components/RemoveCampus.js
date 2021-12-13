import React from "react";
import { connect } from "react-redux";
import { deleteCampus } from "../redux/campuses";

export class RemoveCampus extends React.Component {
  // constructor() {
  //   super();
  //   this.submitHandler = this.submitHandler.bind(this);
  // }

  // submitHandler(event) {
  //   event.preventDefault();
  //   this.props.deleteCampus(this.props.match.params.campusId)
  // }

  render() {
      console.log('**NEW RENDER OF REMOVE_CAMPUS** ')
    return (
      <div>
        <form onSubmit={(event) => event.preventDefault()}>
        <button
            className='remove'
            onClick={() => this.props.deleteCampus(campus.id)}
          >
            Delete Campus
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    deleteCampus: (id) => dispatch(deleteCampus(id)),
  };
};

export default connect(null, mapDispatch)(RemoveCampus);
