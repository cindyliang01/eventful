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
    } = this.props;
    return (
      <React.Fragment>
        <h1>Create post</h1>
        <PostForm createPost={createPost} />

        <div>
          {listOfPosts.map((specificPost) => (
            <React.Fragment>
              <Post
                onePost={specificPost}
                key={specificPost.id}
                addLike={addLike}
                createComment={createComment}
                addLikeForComment={addLikeForComment}
              />
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
