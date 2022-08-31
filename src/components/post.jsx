import React, { Component } from "react";
import CommentForm from "./commentForm";

class Post extends Component {
  render() {
    const { onePost, addLike, createComment } = this.props;
    return (
      <div>
        <h4>Post :</h4>
        <p>{this.displayPosts()}</p>

        <CommentForm createComment={createComment} onePost={onePost} />

        <span>Likes: {this.likeCounts()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => addLike(onePost)}
        >
          {this.likeUnlike()}
        </button>
      </div>
    );
  }

  displayPosts() {
    const { post } = this.props.onePost;
    return post;
  }

  likeCounts() {
    const { like } = this.props.onePost;
    return like;
  }

  likeUnlike() {
    const { like } = this.props.onePost;
    return like === 0 ? "Like" : "Unlike";
  }
}

export default Post;
