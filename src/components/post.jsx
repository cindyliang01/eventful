import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <h4>Post :</h4>
        <p>{this.displayPosts()}</p>
      </div>
    );
  }

  displayPosts() {
    const { post } = this.props.onePost;
    return post;
  }
}

export default Post;
