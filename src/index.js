import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/blog" component={Blog} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
