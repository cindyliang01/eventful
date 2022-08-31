import React, { Component } from "react";

class EachComment extends Component {
  render() {
    const { comments } = this.props.onePost;
    return (
      <div>
        {comments.map((eachComment) => (
          <React.Fragment>
            <div>{eachComment.text}</div>
            <div>CommentLikes: {eachComment.commentLikes}</div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default EachComment;
