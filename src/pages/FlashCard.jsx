import React, { Component } from "react";
import Post from ".././components/post";

class FlashCard extends Component {
  render() {
    const { flashCardIndex, listOfPosts, addLikeForComment, deleteForComment } =
      this.props;

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
