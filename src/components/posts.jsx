import React, { Component } from "react";
import Post from "./post";

class Posts extends Component {
  render() {
    const { listOfPosts } = this.props;
    return listOfPosts.map((specificPost) => (
      <React.Fragment>
        <Post onePost={specificPost} />
      </React.Fragment>
    ));
  }
}

export default Posts;
