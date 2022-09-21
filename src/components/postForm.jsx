import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: "",
    };
  }

  handlePostsChange = (event) => {
    this.setState({
      post: event.target.value,
    });
  };

  render() {
    const { createPost } = this.props;
    return (
      <div>
        <form
          onSubmit={(event) => {
            if (this.state.post !== "") {
              event.preventDefault();
              createPost(this.state.post);
              this.setState({ post: "" });
            } else {
              alert("You can't have an empty post");
              event.preventDefault();
            }
          }}
          className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        >
          <textarea
            type="text"
            placeholder="Post"
            value={this.state.post}
            onChange={this.handlePostsChange}
            className="border-2 rounded border-gray-300 p-1"
          ></textarea>
          <button
            className="bg-pink-300 text-white rounded p-1 font-bold hover:bg-pink-200"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
