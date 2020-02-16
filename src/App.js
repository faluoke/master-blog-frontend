import React, { Component } from "react";
import axios from "axios";
// import logo from "./logo.svg";

import Nav from "./components/Nav";
import PostList from "./components/PostList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPosts: [],
      loading: true
    };
  }

  fetchPosts = () => {
    axios
      .get("https://master-blog-api.herokuapp.com/api/posts")
      .then(response => {
        if (response.data) {
          let blogPostClone = this.state.blogPosts.slice();
          blogPostClone = response.data;
          this.setState({
            blogPosts: blogPostClone,
            loading: false
          });
        }
      })

      .catch(err => {
        console.log(err);
      });
  };

  createPost = (title, author, image, body) => {
    axios
      .post("https://master-blog-api.herokuapp.com/api/post", {
        title: title,
        author: author,
        image: image,
        body: body
      })
      .then(response => {
        if (response.status === 201) {
          this.fetchPosts();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  editPost = (title, author, image, body, id) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(proxyurl + image)
      .then(response => {
        if (response.status === 200) {
          axios
            .put(
              `https://master-blog-api.herokuapp.com/api/post/update/${id}`,
              {
                title: title,
                author: author,
                image: image,
                body: body
              }
            )
            .then(response => {
              if (response.status === 200) {
                this.fetchPosts();
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  deletePost = id => {
    axios
      .delete(`https://master-blog-api.herokuapp.com/api/post/delete/${id}`)
      .then(response => {
        if (response.status === 200) {
          this.fetchPosts();
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
        <Nav createPost={this.createPost} />
        <PostList
          loading={this.state.loading}
          blogPosts={this.state.blogPosts}
          editPost={this.editPost}
          deletePost={this.deletePost}
        />
      </div>
    );
  }
}
