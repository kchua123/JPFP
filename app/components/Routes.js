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
          <div className="title">
            <h3>The Margaret Hamilton Interplanetary Academy of JavaScript</h3>
          </div>
          <div className="nav-item">
            <Link
              to="/campuses"
              style={{ textDecoration: "none", color: "white" }}
            >
              All Campuses
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/students"
              style={{ textDecoration: "none", color: "white" }}
            >
              All Students
            </Link>
          </div>
        </nav>
        <main>
          <Route exact path="/" component={AllCampuses} />
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
