import { list } from "postcss";
import React, { Component } from "react";
import Post from ".././components/post";
import EachComment from "../components/eachComment";

class FlashCard extends Component {
  render() {
    const {
      flashCardIndex,
      listOfPosts,
      addLike,
      createComment,
      addLikeForComment,
      deleteForComment,
    } = this.props;
    return (
      <React.Fragment>
        <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
          <ul>
            {listOfPosts.length > 0 ? (
              <React.Fragment>
                {/* <div>Post: {listOfPosts[flashCardIndex].post}</div>
                <div>Email: {listOfPosts[flashCardIndex].email}</div>
                <EachComment
                  comments={listOfPosts[flashCardIndex].comments}
                  onePost={listOfPosts[flashCardIndex]}
                ></EachComment> */}
                <Post
                  onePost={listOfPosts[flashCardIndex]}
                  comments={listOfPosts[flashCardIndex].comments}
                  addLikeForComment={addLikeForComment}
                  deleteForComment={deleteForComment}
                ></Post>
                if flash card state is activated then don't show the comment
                button pass in
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
