import React, { Component } from "react";

class EachComment extends Component {
  render() {
    const { comments } = this.props.onePost;
    const { onePost, addLikeForComment, deleteForComment, pageState } =
      this.props;
    return (
      <div className=" flex flex-col-reverse">
        {comments.map((eachComment) => (
          <React.Fragment>
            <div
              className={
                pageState === "flashcard"
                  ? "border-b border-gray-300 m-6 pb-4"
                  : "border-t border-gray-300 m-6 pt-4"
              }
            >
              <div className="flex flex-col">
                <div className="text-center">{eachComment.text}</div>
                <div>
                  <div className="flex flex-row">
                    <button
                      className={
                        eachComment.commentLikes === 0
                          ? " hover:bg-transparent bg-blue-300 hover:text-blue-500 text-gray-100 font-semibold mt-3  py-2 px-4 border rounded"
                          : " hover:bg-green-200 text-white bg-green-300  font-semibold mt-3  py-2 px-4 border rounded"
                      }
                      onClick={() => addLikeForComment(eachComment.id, onePost)}
                    >
                      {eachComment.commentLikes === 0 ? " ✓" : " ✓"}
                    </button>

                    <div className="flex flex-grow"></div>

                    {pageState === "flashcard" ? (
                      <div></div>
                    ) : (
                      <button
                        className=" hover:bg-red-300 text-white bg-red-400  font-semibold mt-3  py-2 px-4 border rounded"
                        onClick={() =>
                          deleteForComment(eachComment.id, onePost.id)
                        }
                      >
                        X
                      </button>
                    )}
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
