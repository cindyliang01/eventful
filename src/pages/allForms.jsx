import React, { Component } from "react";
import Posts from ".././components/posts";

class AllForms extends Component {
  render() {
    const {
      listOfPosts,
      addLike,
      createPost,
      createComment,
      addLikeForComment,
      deleteForComment,
      pageState,
    } = this.props;
    return (
      <React.Fragment>
        <h1 className="text-center font-bold text-2xl mt-4 text-pink-300">
          Posts
        </h1>
        <div>
          <Posts
            listOfPosts={listOfPosts}
            addLike={addLike}
            createPost={createPost}
            createComment={createComment}
            addLikeForComment={addLikeForComment}
            deleteForComment={deleteForComment}
            pageState={pageState}
          ></Posts>
        </div>
      </React.Fragment>
    );
  }
}

export default AllForms;
