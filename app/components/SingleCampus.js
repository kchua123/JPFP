import React from "react";
import { connect } from "react-redux";
import { fetchSingleCampus } from '../redux/singleCampus'

export class SingleCampus extends React.Component {
  componentDidMount() {
    this.props.getCampus(this.props.match.params.campusId)
  }
  render() {
    console.log('REACHED THE SingleCampus RENDER')
    console.log('THIS.PROPS CONSOLE LOG: ', this.props)
    return (
      <div>
            <h2>{this.props.campus.name}</h2>
            <img src={this.props.campus.imageUrl} />
            <h4>Location: {this.props.campus.address}</h4>
            <h4>Description: {this.props.campus.description}</h4>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    campus: state.campus
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCampus: (id) => dispatch(fetchSingleCampus(id))
  };
};

export default connect(mapState, mapDispatch)(SingleCampus);