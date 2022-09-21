import React, { Component } from "react";

class EachComment extends Component {
  render() {
    const { comments } = this.props.onePost;
    const { onePost, addLikeForComment, deleteForComment } = this.props;
    return (
      <div>
        {comments.map((eachComment) => (
          <React.Fragment>
            <div className="border-2 border-gray-300 rounded m-2 p-2 ">
              <div className="flex flex-row">
                <div className="w-1/2 m-3">{eachComment.text}</div>
                <div className="w-1/2 m-3">
                  <div className="flex flex-col">
                    <div>CommentLikes: {eachComment.commentLikes}</div>
                    <div>
                      <div className="flex flex-row">
                        <div className="w-1/2">
                          <button
                            className="btn btn-secondary btn-sm m-2"
                            onClick={() =>
                              addLikeForComment(eachComment.id, onePost)
                            }
                          >
                            {eachComment.commentLikes === 0 ? "Like" : "Unlike"}
                          </button>
                        </div>

                        <div className="w-1/2">
                          <button
                            className="btn btn-danger btn-sm m-2"
                            onClick={() =>
                              deleteForComment(eachComment.id, onePost.id)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default EachComment;
