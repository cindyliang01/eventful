import React, { Component } from "react";

class EachComment extends Component {
  render() {
    const { comments } = this.props.onePost;
    const { onePost, addLikeForComment, deleteForComment } = this.props;
    return (
      <div>
        {comments.map((eachComment) => (
          <React.Fragment>
            <div className="border-2 border-blue-300 rounded m-2 p-2 ">
              <div className="flex flex-row">
                <div className="w-1/2 m-3">{eachComment.text}</div>
                <div className="w-1/2 m-3">
                  <div className="flex flex-col">
                    <div>
                      {eachComment.commentLikes === 0 ? "" : "Resolved!"}
                    </div>
                    <div>
                      <div className="flex flex-row">
                        <div>
                          <button
                            className={
                              eachComment.commentLikes === 0
                                ? "btn btn-secondary btn-sm m-2"
                                : "text-white rounded p-2 bg-green-400 hover:bg-green-300"
                            }
                            onClick={() =>
                              addLikeForComment(eachComment.id, onePost)
                            }
                          >
                            {eachComment.commentLikes === 0
                              ? "Resolve"
                              : "Resolved!"}
                          </button>
                        </div>
                        <div className="flex flex-grow"></div>

                        <div>
                          <button
                            className="btn btn-danger btn-sm p-2"
                            onClick={() =>
                              deleteForComment(eachComment.id, onePost.id)
                            }
                          >
                            X
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
