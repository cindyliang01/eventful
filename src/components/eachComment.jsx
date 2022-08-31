import React, { Component } from "react";

class EachComment extends Component {
  render() {
    const { comments } = this.props.onePost;
    const { onePost, addLikeForComment, deleteForComment } = this.props;
    return (
      <div>
        {comments.map((eachComment) => (
          <React.Fragment>
            <div>{eachComment.text}</div>
            <div>CommentLikes: {eachComment.commentLikes}</div>
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => addLikeForComment(eachComment.id, onePost)}
            >
              {eachComment.commentLikes === 0 ? "Like" : "Unlike"}
            </button>
            <button
              onClick={() => deleteForComment(eachComment.id, onePost.id)}
            >
              Delete
            </button>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default EachComment;
