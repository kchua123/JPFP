import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import SingleCampus from './SingleCampus'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!</nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route path='/campuses/:campusId' component={SingleCampus} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
