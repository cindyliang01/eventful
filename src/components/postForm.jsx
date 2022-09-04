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
        >
          <textarea
            type="text"
            placeholder="Post"
            value={this.state.post}
            onChange={this.handlePostsChange}
          ></textarea>
          <button className="btn btn-secondary btn-sm m-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
