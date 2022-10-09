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
    } = this.props;

    return (
      <React.Fragment>
        <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
          <ul>
            {listOfPosts.length > 0 ? (
              <React.Fragment>
                <Post
                  onePost={listOfPosts[flashCardIndex]}
                  comments={listOfPosts[flashCardIndex].comments}
                  addLikeForComment={addLikeForComment}
                  deleteForComment={deleteForComment}
                ></Post>

                <button
                  onClick={() => goPrevious(flashCardIndex)}
                  className={
                    "  text-white rounded p-3 m-4 font-bold  " +
                    (flashCardIndex === 0
                      ? "bg-gray-300 hover:bg-grey-200"
                      : "bg-pink-300 hover:bg-pink-200")
                  }
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
                >
                  next
                </button>

                {/* <button
              onClick={() => goPrevious(flashCardIndex, notes.length)}
              className={
                "  text-white rounded p-3 m-4 font-bold  " +
                (flashCardIndex === 0
                  ? "bg-gray-300 hover:bg-grey-200"
                  : "bg-pink-300 hover:bg-pink-200")
              }
              disabled={flashCardIndex == 0}
            >
              prev
            </button> */}
              </React.Fragment>
            ) : (
              // "fjsdf"
              "No posts"
            )}
          </ul>
        </div>
        {flashCardIndex}
      </React.Fragment>
    );
  }

  // displayOneFlash() {
  //   const { listOfPosts } = this.props;
  //   onePost = listOfPosts;
  // }
}

export default FlashCard;
