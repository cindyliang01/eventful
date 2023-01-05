import React, { Component } from "react";
import Posts from "../components/posts";

class AllTheForms extends Component {
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
        <h1 className="text-center font-bold text-2xl mt-4 text-blue-300">
          All Forms : {listOfPosts.length}
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

export default AllTheForms;

//done
