import React, { Component } from "react";
import Posts from ".././components/posts";
import PostForm from "../components/postForm";

class Form extends Component {
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
    return (
      <React.Fragment>
        <h1 className="text-center font-bold text-2xl mt-4 text-pink-300">
          Welcome!
        </h1>
        <PostForm createPost={createPost}></PostForm>
        <Posts
          listOfPosts={listOfPosts}
          addLike={addLike}
          createComment={createComment}
          addLikeForComment={addLikeForComment}
          deleteForComment={deleteForComment}
          flashCardState={flashCardState}
        ></Posts>
      </React.Fragment>
    );
  }
}

export default Form;
