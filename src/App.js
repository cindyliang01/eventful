import React, { Component } from "react";
import "./App.css";
import Posts from "./components/posts";

class App extends Component {
  state = {
    dummyListPosts: [
      {
        id: 1,
        like: 0,
        comments: [
          { id: 1, text: "commentOneFromPostOne", commentLikes: 1 },
          { id: 2, text: "commentTwoFromPostOne", commentLikes: 0 },
        ],
        post: "POST1",
      },
      {
        id: 2,
        like: 1,
        comments: [
          { id: 1, text: "commentOneFromPostTwo", commentLikes: 0 },
          { id: 2, text: "commentTwoFromPostTwo", commentLikes: 0 },
        ],
        post: "POST2",
      },
      {
        id: 3,
        like: 0,
        comments: [
          { id: 1, text: "commentOneFromPostThree", commentLikes: 0 },
          { id: 2, text: "commentTwoFromPostThree", commentLikes: 0 },
        ],
        post: "POST3",
      },
    ],
  };

  addLike = (specificPost) => {
    // cloning specific post instead of altering the actual state
    const copyOfPosts = [...this.state.dummyListPosts];
    const index = copyOfPosts.indexOf(specificPost);
    copyOfPosts[index] = { ...specificPost };

    //only lets user like once --> Either shows like or unlike

    if (specificPost.like === 0) {
      copyOfPosts[index].like++;
      this.setState({ dummyListPosts: copyOfPosts });
    } else {
      copyOfPosts[index].like--;
      this.setState({ dummyListPosts: copyOfPosts });
    }
  };

  createPost = () => {
    console.log("cr4eate post");
  };

  render() {
    return (
      <React.Fragment>
        <Posts
          listOfPosts={this.state.dummyListPosts}
          addLike={this.addLike}
          createPost={this.createPost}
        />
      </React.Fragment>
    );
  }
}

export default App;
