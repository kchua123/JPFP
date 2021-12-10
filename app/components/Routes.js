import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import SingleCampus from './SingleCampus'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!</nav>
        <main>
          <h1>Welcome to Hogwarts!</h1>
          <Link to='/campuses'>All Campuses</Link>
          <Link to='/students'>All Students</Link>
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route path='/campuses/:campusId' component={SingleCampus} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
