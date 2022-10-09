import React, { Component } from "react";
import Post from "./post";
import PostForm from "./postForm";

class Posts extends Component {
  render() {
    const {
      listOfPosts,
      addLike,
      createPost,
      createComment,
      addLikeForComment,
      deleteForComment,
      flashCardState,
    } = this.props;

    const reversedPosts = listOfPosts.map((item) => item).reverse();
    return (
      <React.Fragment>
        <PostForm createPost={createPost} />
        <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
          <ul>
            {reversedPosts.map((specificPost) => (
              <React.Fragment>
                <li className="border-2 rounded-lg border-pink-200 mb-4 p-2">
                  <Post
                    onePost={specificPost}
                    key={specificPost.id}
                    addLike={addLike}
                    createComment={createComment}
                    addLikeForComment={addLikeForComment}
                    deleteForComment={deleteForComment}
                    flashCardState={flashCardState}
                  />
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
