import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AllTheForms from "./pages/allTheForms";
import FlashCard from "./pages/FlashCard";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  state = {
    dummyListPosts: [
      {
        id: 1,
        like: 0,
        comments: [],
        post: "John W",
        email: "sdfsdf@gmail.com",
        feedback: "Feedback 1",
      },
      {
        id: 2,
        like: 1,
        comments: [
          { id: 1, text: "commentOneFromPostTwo", commentLikes: 0 },
          { id: 2, text: "commentTwoFromPostTwo", commentLikes: 0 },
        ],
        post: "Jackie B",
        email: "fisf@gmail.com",
        feedback: "No strong scents",
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
        feedback: "Focus on the mood",
      },
    ],

    dummyListTemplate: [
      {
        id: 0,
        like: 0,
        comments: [{ id: 1, text: "", commentLikes: 0 }],
        post: "",
        email: "",
        feedback: "",
      },
    ],

    flashCardIndex: 1,
    pageState: "home",
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
  };

  createFeedBack = (newFeedback, specificPost) => {
    const copyOfPosts = [...this.state.dummyListPosts];
    const index = copyOfPosts.indexOf(specificPost);
    copyOfPosts[index] = { ...specificPost };
    copyOfPosts[index].feedback = newFeedback;
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
      console.log(this.state.pageState);
    });
  };

  goPrevious = (flashCardIndex) => {
    if (flashCardIndex > 0) {
      flashCardIndex--;
      this.setState({ flashCardIndex }, () => {
        console.log(this.state.flashCardIndex);
      });
    }
  };

  goNext = (flashCardIndex, length) => {
    if (flashCardIndex < length - 1) {
      flashCardIndex++;
      this.setState({ flashCardIndex }, () => {
        console.log(this.state.flashCardIndex);
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
                  createComment={this.createComment}
                />
              }
            ></Route>
            <Route
              path="/AllForms"
              element={
                // <allForms
                //   listOfPosts={this.state.dummyListPosts}
                //   addLike={this.addLike}
                //   createPost={this.createPost}
                //   createComment={this.createComment}
                //   addLikeForComment={this.addLikeForComment}
                //   deleteForComment={this.deleteForComment}
                //   pageState={this.state.pageState}
                // />
                <AllTheForms
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
