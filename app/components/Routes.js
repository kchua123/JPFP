import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllCampuses from './AllCampuses'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!</nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Route path="/campuses" component={AllCampuses} />
          <Route exact path="/" component={AllCampuses} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
