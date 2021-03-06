import React from "react";
import { connect } from "react-redux";
import { fetchCampuses, deleteCampus } from "../redux/campuses";
import { Link } from "react-router-dom";
import AddCampus from "./AddCampus";

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.getCampuses();
  }

  render() {
    return (
      <div id="campus-list">
        {this.props.campuses.map((campus) => {
          return (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`} key={campus.id} style={{ textDecoration: 'none', color: "black" }}>
                <div key={campus.id}>
                  <h3>{campus.name}</h3>
                  <img src={campus.imageUrl} />
                </div>
              </Link>
              <form onSubmit={(event) => event.preventDefault()}>
                <button
                  className="remove"
                  onClick={() => this.props.deleteCampus(campus.id)}
                >
                  Remove Campus
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
    deleteCampus: (id) => dispatch(deleteCampus(id)),
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
