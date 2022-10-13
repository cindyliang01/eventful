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
    return (
      <React.Fragment>
        <h1 className="text-center font-bold text-2xl mt-4 text-pink-300">
          Review Feedback!
        </h1>
        <div className="w-auto min-w-[25%] max-w-min mt-8 mx-auto space-y-6 flex flex-col items-stretch border-2 rounded-lg border-pink-200 mb-4 p-2">
          <ul>
            {listOfPosts.length > 0 ? (
              <React.Fragment>
                <Post
                  onePost={listOfPosts[flashCardIndex]}
                  comments={listOfPosts[flashCardIndex].comments}
                  addLikeForComment={addLikeForComment}
                  deleteForComment={deleteForComment}
                  pageState={pageState}
                ></Post>

                <button
                  onClick={() => goPrevious(flashCardIndex)}
                  className={
                    "  text-white rounded p-3 m-4 font-bold  " +
                    (flashCardIndex === 0
                      ? "bg-gray-300 hover:bg-grey-200"
                      : "bg-pink-300 hover:bg-pink-200")
                  }
                  disabled={flashCardIndex === 0}
                >
                  prev
                </button>
                <button
                  onClick={() => goNext(flashCardIndex, listOfPosts.length)}
                  className={
                    "  text-white rounded p-3 m-4 font-bold  " +
                    (flashCardIndex === listOfPosts.length - 1
                      ? "bg-gray-300 hover:bg-grey-200"
                      : "bg-pink-300 hover:bg-pink-200")
                  }
                  disabled={flashCardIndex === listOfPosts.length - 1}
                >
                  next
                </button>
              </React.Fragment>
            ) : (
              "No posts"
            )}
          </ul>
        </div>
        {flashCardIndex}
      </React.Fragment>
    );
  }
}

export default FlashCard;
