import React from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../redux/campuses";
import { Link } from "react-router-dom";
import AddCampus from './AddCampus'
import { deleteCampus } from '../redux/campuses'

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.getCampuses();
  }

  render() {
    return (
      <div>
        {this.props.campuses.map((campus) => {
          return (
            <div key={campus.id}>
            <Link to={`/campuses/${campus.id}`} key={campus.id}>
              <div key={campus.id}>
                <h2>{campus.name}</h2>
                <img src={campus.imageUrl} />
              </div>
            </Link>
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
        })}
        <AddCampus />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCampuses: () => dispatch(fetchCampuses()),
    deleteCampus: (id) => dispatch(deleteCampus(id))
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
