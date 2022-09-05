import React, { Component } from "react";
import "./App.css";
import Posts from "./components/posts";

class App extends Component {
  state = {
    dummyListPosts: [
      // {
      //   id: 1,
      //   like: 0,
      //   comments: [
      //     { id: 1, text: "commentOneFromPostOne", commentLikes: 1 },
      //     { id: 2, text: "commentTwoFromPostOne", commentLikes: 0 },
      //   ],
      //   post: "POST1",
      // },
      // {
      //   id: 2,
      //   like: 1,
      //   comments: [
      //     { id: 1, text: "commentOneFromPostTwo", commentLikes: 0 },
      //     { id: 2, text: "commentTwoFromPostTwo", commentLikes: 0 },
      //   ],
      //   post: "POST2",
      // },
      // {
      //   id: 3,
      //   like: 0,
      //   comments: [
      //     { id: 1, text: "commentOneFromPostThree", commentLikes: 0 },
      //     { id: 2, text: "commentTwoFromPostThree", commentLikes: 0 },
      //   ],
      //   post: "POST3",
      // },
    ],

    dummyListTemplate: [
      {
        id: 0,
        like: 0,
        comments: [{ id: 1, text: "", commentLikes: 0 }],
        post: " ",
      },
    ],
  };

  createPost = (newPost) => {
    const copyOfPosts = [...this.state.dummyListPosts];
    const length = copyOfPosts.length;

    let emptyPostTemplate = JSON.parse(
      JSON.stringify(this.state.dummyListTemplate[0])
    );

    copyOfPosts[length] = emptyPostTemplate;
    copyOfPosts[length].post = newPost;
    copyOfPosts[length].id = length + 1;

    this.setState({ dummyListPosts: copyOfPosts });
    console.log(copyOfPosts);
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

  createComment = (newComment, specificPost) => {
    // cloning specific post instead of altering the actual state
    const copyOfPosts = [...this.state.dummyListPosts];
    const index = copyOfPosts.indexOf(specificPost);
    copyOfPosts[index] = { ...specificPost };

    let dummyVariable = 0;

    if (
      copyOfPosts[index].comments.length !== 0 &&
      copyOfPosts[index].comments[0].text === ""
    ) {
      dummyVariable = 0;
    } else {
      dummyVariable = copyOfPosts[index].comments.length;
    }

    const length = dummyVariable;

    copyOfPosts[index].comments[length] = {
      ...this.state.dummyListTemplate[0].comments[0],
    };
    // setting up new comment in specific post
    copyOfPosts[index].comments[length].text = newComment;
    copyOfPosts[index].comments[length].id = length + 1;
    this.setState({ dummyListPosts: copyOfPosts });
    console.log(copyOfPosts);
  };

  addLikeForComment = (commentId, specificPost) => {
    const copyOfPosts = [...this.state.dummyListPosts];
    const index = copyOfPosts.indexOf(specificPost);
    copyOfPosts[index] = { ...specificPost };

    if (specificPost.comments[commentId - 1].commentLikes === 0) {
      copyOfPosts[index].comments[commentId - 1].commentLikes++;
      this.setState({ dummyListPosts: copyOfPosts });
    } else {
      copyOfPosts[index].comments[commentId - 1].commentLikes--;
      this.setState({ dummyListPosts: copyOfPosts });
    }
  };

  deleteForComment = (commentId, specificPostId) => {
    const copyOfPosts = [...this.state.dummyListPosts];
    const deleteComments = this.state.dummyListPosts[
      specificPostId - 1
    ].comments.filter((c) => c.id !== commentId);

    let i = 1;
    deleteComments.map((comment) => {
      comment.id = i++;
      return true;
    });

    copyOfPosts[specificPostId - 1].comments = deleteComments;
    this.setState({ copyOfPosts: deleteComments });
    console.log(copyOfPosts);
  };

  render() {
    return (
      <React.Fragment>
        <Posts
          listOfPosts={this.state.dummyListPosts}
          addLike={this.addLike}
          createPost={this.createPost}
          createComment={this.createComment}
          addLikeForComment={this.addLikeForComment}
          deleteForComment={this.deleteForComment}
        />
      </React.Fragment>
    );
  }
}

export default App;
