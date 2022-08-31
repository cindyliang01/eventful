import React, { Component } from "react";
import Post from "./post";

class Posts extends Component {
  render() {
    const { listOfPosts, addLike } = this.props;
    return listOfPosts.map((specificPost) => (
      <React.Fragment>
        <Post onePost={specificPost} key={specificPost.id} addLike={addLike} />
      </React.Fragment>
    ));
  }
}

export default Posts;
