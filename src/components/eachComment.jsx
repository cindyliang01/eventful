import React, { Component } from "react";

class EachComment extends Component {
  render() {
    const { comments } = this.props.onePost;
    const { onePost, addLikeForComment, deleteForComment } = this.props;
    return (
      <div>
        {comments.map((eachComment) => (
          <React.Fragment>
            <div className="border-t border-gray-300 m-6 pt-4 ">
              <div className="flex flex-col">
                <div className="text-center">{eachComment.text}</div>
                <div>
                  <div className="flex flex-row">
                    <button
                      className={
                        eachComment.commentLikes === 0
                          ? " hover:bg-pink-200 text-white bg-pink-300  font-semibold mt-3  py-2 px-4 border rounded"
                          : " hover:bg-green-200 text-white bg-green-300  font-semibold mt-3  py-2 px-4 border rounded"
                      }
                      onClick={() => addLikeForComment(eachComment.id, onePost)}
                    >
                      {eachComment.commentLikes === 0 ? "Resolve" : "Resolved!"}
                    </button>

                    <div className="flex flex-grow"></div>

                    <button
                      className=" hover:bg-red-300 text-white bg-red-400  font-semibold mt-3  py-2 px-4 border rounded"
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
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default EachComment;
