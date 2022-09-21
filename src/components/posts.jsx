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
    } = this.props;
    return (
      <React.Fragment>
        <h1 className="text-center font-bold text-2xl mt-4 text-pink-300">
          Create post
        </h1>
        <PostForm createPost={createPost} />
        <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
          <ul>
            {listOfPosts.map((specificPost) => (
              <React.Fragment>
                <li className="border-2 rounded-lg border-pink-200 mb-4 p-2">
                  <Post
                    onePost={specificPost}
                    key={specificPost.id}
                    addLike={addLike}
                    createComment={createComment}
                    addLikeForComment={addLikeForComment}
                    deleteForComment={deleteForComment}
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
