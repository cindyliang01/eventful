import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: "",
      email: "",
    };
  }

  handlePostsChange = (event) => {
    this.setState({
      post: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    const { createPost, pageState } = this.props;
    return (
      <div>
        <form
          onSubmit={(event) => {
            if (this.state.post !== "" && this.state.email !== "") {
              event.preventDefault();
              createPost(this.state.post, this.state.email);
              this.setState({ post: "", email: "" });
            } else if (this.state.email === "") {
              alert("You can't have an empty Email!");
              event.preventDefault();
            } else {
              alert("You can't have an empty Name!");
              event.preventDefault();
            }
          }}
          className={
            pageState === "home"
              ? "w-auto min-w-[60%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
              : "w-auto min-w-[30%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
          }
        >
          <input
            type="text"
            placeholder="Name"
            value={this.state.post}
            onChange={this.handlePostsChange}
            className="border-2 rounded border-gray-300 p-1"
          ></input>

          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="border-2 rounded border-gray-300 p-1"
          ></input>

          <button
            className="hover:bg-transparent bg-blue-300 hover:text-blue-500 text-gray-100 font-semibold mt-3  py-2 px-4 border rounded"
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

//done
