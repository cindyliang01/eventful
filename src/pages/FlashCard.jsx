import React, { Component } from "react";
import Post from ".././components/post";
import FeedBack from "../components/feedback";

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
      createFeedBack,
    } = this.props;

    const filteredPost = listOfPosts.filter(
      (post) => post.comments.length > 0 && post.comments[0].text !== ""
    );
    // const filteredPost = listOfPosts;
    return (
      <React.Fragment>
        <h1 className="text-center font-bold text-2xl mt-4 text-blue-300">
          Review Feedback!
        </h1>
        <div className="text-center font-bold text-xl mt-4 text-gray-400">
          {flashCardIndex + 1} of {filteredPost.length}
        </div>
        <ul>
          {filteredPost.length > 0 ? (
            <React.Fragment>
              <div className="flex flex-row">
                <div className="w-auto min-w-[35%] max-w-min mt-8 mx-auto space-y-6 flex flex-col items-stretch border-4 rounded-2xl border-blue-300 max-h-96 overflow-auto">
                  <div className="flex flex-col">
                    <Post
                      onePost={filteredPost[flashCardIndex]}
                      comments={filteredPost[flashCardIndex].comments}
                      addLikeForComment={addLikeForComment}
                      deleteForComment={deleteForComment}
                      pageState={pageState}
                      createFeedBack={createFeedBack}
                    ></Post>
                  </div>
                </div>
                <div className="w-auto min-w-[35%] max-w-min mt-8 mx-auto space-y-6 flex flex-col items-stretch border-4 rounded-2xl border-blue-300 max-h-96 overflow-auto">
                  <h1 className="text-center font-bold text-2xl mt-4 text-blue-300">
                    Internalize
                  </h1>
                  {/* <div className="text-center font-bold text-lg pt-4">
                    {filteredPost[flashCardIndex].feedback}
                  </div> */}

                  <FeedBack onePost={filteredPost[flashCardIndex]}></FeedBack>
                </div>
              </div>
            </React.Fragment>
          ) : (
            "No comments to review"
          )}
        </ul>
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
            onClick={() => goNext(flashCardIndex, filteredPost.length)}
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
      </React.Fragment>
    );
  }
}

export default FlashCard;
