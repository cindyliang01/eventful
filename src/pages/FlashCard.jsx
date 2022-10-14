import React, { Component } from "react";
import Post from ".././components/post";

class FlashCard extends Component {
  render() {
    const {
      flashCardIndex,
      listOfPosts,
      addLikeForComment,
      deleteForComment,
      goPrevious,
      goNext,
      pageState,
    } = this.props;

    const filteredPost = listOfPosts.filter((post) => post.comments.length > 0);
    return (
      <React.Fragment>
        <h1 className="text-center font-bold text-2xl mt-4 text-pink-300">
          Review Feedback!
        </h1>
        <div className="w-auto min-w-[35%] max-w-min mt-8 mx-auto space-y-6 flex flex-col items-stretch border-2 rounded-2xl border-pink-200 mb-4 p-2">
          <ul>
            {filteredPost.length > 0 ? (
              <React.Fragment>
                <div className="flex flex-col">
                  <Post
                    onePost={filteredPost[flashCardIndex]}
                    comments={filteredPost[flashCardIndex].comments}
                    addLikeForComment={addLikeForComment}
                    deleteForComment={deleteForComment}
                    pageState={pageState}
                  ></Post>
                  <div className="flex flex-row justify-between mx-2">
                    <button
                      onClick={() => goPrevious(flashCardIndex)}
                      className={
                        "  text-white rounded-xl font-semibold mt-3 py-2 px-3  " +
                        (flashCardIndex === 0
                          ? "bg-gray-300 hover:bg-grey-200"
                          : "bg-pink-300 hover:bg-pink-200")
                      }
                      disabled={flashCardIndex === 0}
                    >
                      prev
                    </button>
                    <button
                      onClick={() =>
                        goNext(flashCardIndex, filteredPost.length)
                      }
                      className={
                        "  text-white rounded-xl font-semibold mt-3 py-2 px-3  " +
                        (flashCardIndex === filteredPost.length - 1
                          ? "bg-gray-300 hover:bg-grey-200"
                          : "bg-pink-300 hover:bg-pink-200")
                      }
                      disabled={flashCardIndex === filteredPost.length - 1}
                    >
                      next
                    </button>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              "No comments to review"
            )}
          </ul>
        </div>
        {flashCardIndex}
      </React.Fragment>
    );
  }
}

export default FlashCard;
