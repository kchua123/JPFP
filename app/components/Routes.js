import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!</nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Route path="/campuses" component={AllCampuses} />
          <Route path="/students" component={AllStudents} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
