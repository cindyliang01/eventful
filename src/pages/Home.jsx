import React, { Component } from "react";
import Posts from ".././components/posts";
import PostForm from "../components/postForm";

class Home extends Component {
  render() {
    return (
      <div class="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>

        <div>09</div>
      </div>
    );
  }

  //   render() {
  //     const {
  //       listOfPosts,
  //       addLike,
  //       createPost,
  //       createComment,
  //       addLikeForComment,
  //       deleteForComment,
  //       flashCardState,
  //     } = this.props;
  //     return (
  //       <React.Fragment>
  //         <h1 className="text-center font-bold text-2xl mt-4 text-pink-300">
  //           Welcome!
  //         </h1>
  //         <PostForm createPost={createPost}></PostForm>
  //         <Posts
  //           listOfPosts={listOfPosts}
  //           addLike={addLike}
  //           createComment={createComment}
  //           addLikeForComment={addLikeForComment}
  //           deleteForComment={deleteForComment}
  //           flashCardState={flashCardState}
  //         ></Posts>
  //       </React.Fragment>
  //     );
  //   }
  // }
}
export default Home;
