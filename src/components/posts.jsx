import React, { Component } from "react";
import Post from "./post";

class Posts extends Component {
  render() {
    const {
      listOfPosts,
      addLike,
      createComment,
      addLikeForComment,
      deleteForComment,
      pageState,
    } = this.props;

    const reversedPosts = listOfPosts.map((item) => item).reverse();
    return (
      <React.Fragment>
        <div
          className={
            pageState === "allForms"
              ? "grid grid-cols-3 gap-8 pt-4"
              : "w-auto min-w-[35%] max-w-min mt-12 mx-auto space-y-6 flex flex-col items-stretch"
          }
        >
          {reversedPosts.map((specificPost) => (
            <React.Fragment>
              <div className="border-2 rounded-2xl border-grey-200 mb-4 p-2 max-h-96 overflow-auto bg-slate-200">
                <Post
                  onePost={specificPost}
                  key={specificPost.id}
                  addLike={addLike}
                  createComment={createComment}
                  addLikeForComment={addLikeForComment}
                  deleteForComment={deleteForComment}
                  pageState={pageState}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
