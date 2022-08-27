import React, { Component } from "react";
import "./App.css";

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

  render() {
    return <div className="App"></div>;
  }
}

export default App;
