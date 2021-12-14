import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/campuses">All Campuses</Link>
          <Link to="/students">All Students</Link>
        </nav>
        <main>
          <h1>
            Welcome to The Margaret Hamilton Interplanetary Academy of
            JavaScript
          </h1>
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
          <Route path="/students/:studentId" component={SingleStudent} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
