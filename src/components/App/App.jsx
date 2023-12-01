import React from "react";
import axios from "axios";
import "./App.css";

import {
  HashRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import Header from "../Header/Header";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import SubmissionSuccess from "../SubmissionSuccess/SubmissionSuccess";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Header />
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          <Header />
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Header />
          <Support />
        </Route>
        <Route exact path="/comments">
          <Header />
          <Comments />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/submissionSuccess">
          <SubmissionSuccess />
        </Route>
      </Router>
    </div>
  );
}

export default App;
