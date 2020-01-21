import React, { Component } from "react";
import axios from "axios";
// import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav";
import PostList from "./components/PostList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPosts: []
    };
  }

  fetchPosts = () => {
    axios
      .get("http://localhost:5000/api/posts")
      .then(response => {
        if (response.data) {
          let blogPostClone = this.state.blogPosts.slice();
          blogPostClone = response.data;
          this.setState({
            blogPosts: blogPostClone
          });
        }
      })

      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <div className="App">
        <Nav fetchPosts={this.fetchPosts} />
        <PostList
          blogPosts={this.state.blogPosts}
          fetchPosts={this.fetchPosts}
        />
      </div>
    );
  }
}
