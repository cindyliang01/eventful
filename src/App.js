import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Form from "./pages/Form";
import AllForms from "./pages/AllForms";
import FlashCard from "./pages/FlashCard";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";

// onclick create post, then update the filteredpost list

class App extends Component {
  state = {
    dummyListPosts: [
      {
        id: 1,
        like: 0,
        // comments: [
        //   { id: 1, text: "commentOneFromPostOne", commentLikes: 1 },
        //   { id: 2, text: "commentTwoFromPostOne", commentLikes: 0 },
        // ],
        comments: [],
        post: "Sunday W",
        email: "sdfsdf@gmail.com",
        feedback: "1",
      },
      {
        id: 2,
        like: 1,
        comments: [
          { id: 1, text: "commentOneFromPostTwo", commentLikes: 0 },
          { id: 2, text: "commentTwoFromPostTwo", commentLikes: 0 },
        ],
        post: "Jackie Jin",
        email: "fisf@gmail.com",
        feedback: "2",
      },
      {
        id: 3,
        like: 0,
        comments: [
          { id: 1, text: "commentOneFromPostThree", commentLikes: 0 },
          { id: 2, text: "commentTwoFromPostThree", commentLikes: 0 },
        ],
        post: "Cindy Liang",
        email: "cindy@gmail.com",
        feedback: "3",
      },
    ],

    dummyListTemplate: [
      {
        id: 0,
        like: 0,
        comments: [{ id: 1, text: "", commentLikes: 0 }],
        post: " ",
      },
    ],

    flashCardIndex: 1,
    pageState: "home",
    filteredPost: [],
  };

  createPost = (newPost, newEmail) => {
    const copyOfPosts = [...this.state.dummyListPosts];
    const length = copyOfPosts.length;

    let emptyPostTemplate = JSON.parse(
      JSON.stringify(this.state.dummyListTemplate[0])
    );

    copyOfPosts[length] = emptyPostTemplate;
    copyOfPosts[length].post = newPost;
    copyOfPosts[length].email = newEmail;
    copyOfPosts[length].id = length + 1;

    this.setState({ dummyListPosts: copyOfPosts });
    // console.log(this.state.filteredPost);
  };

  createFeedBack = (newFeedback, specificPost) => {
    const copyOfPosts = [...this.state.dummyListPosts];
    const index = copyOfPosts.indexOf(specificPost);
    copyOfPosts[index] = { ...specificPost };
    copyOfPosts[index].feedback = newFeedback;
    console.log("id" + index);

    console.log(this.state.dummyListPosts);

    this.setState({ dummyListPosts: copyOfPosts });
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
  };

  setPageState = (state) => {
    this.setState({ pageState: state }, () => {
      console.log("hiiehie" + this.state.pageState);
    });
  };

  goPrevious = (flashCardIndex) => {
    if (flashCardIndex > 0) {
      flashCardIndex--;
      this.setState({ flashCardIndex }, () => {
        console.log("flash index" + this.state.flashCardIndex);
      });
    }
  };

  goNext = (flashCardIndex, length) => {
    if (flashCardIndex < length - 1) {
      flashCardIndex++;
      this.setState({ flashCardIndex }, () => {
        console.log("flash index add" + this.state.flashCardIndex);
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar setPageState={this.setPageState}></NavBar>
        <div className="container">
          <Routes>
            <Route
              path=""
              element={
                <Home
                  createPost={this.createPost}
                  pageState={this.state.pageState}
                />
              }
            ></Route>
            {/* <Route
              path="/Form"
              element={
                <Form
                  listOfPosts={this.state.dummyListPosts}
                  addLike={this.addLike}
                  createPost={this.createPost}
                  createComment={this.createComment}
                  addLikeForComment={this.addLikeForComment}
                  deleteForComment={this.deleteForComment}
                  pageState={this.state.pageState}
                />
              }
            /> */}
            <Route
              path="/AllForms"
              element={
                <AllForms
                  listOfPosts={this.state.dummyListPosts}
                  addLike={this.addLike}
                  createPost={this.createPost}
                  createComment={this.createComment}
                  addLikeForComment={this.addLikeForComment}
                  deleteForComment={this.deleteForComment}
                  pageState={this.state.pageState}
                />
              }
            />
            <Route
              path="/FlashCard"
              element={
                <FlashCard
                  flashCardIndex={this.state.flashCardIndex}
                  listOfPosts={this.state.dummyListPosts}
                  addLikeForComment={this.addLikeForComment}
                  deleteForComment={this.deleteForComment}
                  goPrevious={this.goPrevious}
                  goNext={this.goNext}
                  pageState={this.state.pageState}
                  createFeedBack={this.createFeedBack}
                  listOfFeedBacks={this.state.feedBackTemplate}
                />
              }
            />
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
