import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
    };
  }

  handleCommentsChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    const { onePost, createComment } = this.props;
    return (
      <div>
        <form
          onSubmit={(event) => {
            if (this.state.comment !== "") {
              event.preventDefault();
              createComment(this.state.comment, onePost);
              this.setState({ comment: "" });
            } else {
              alert("You can't have an empty comment");
              event.preventDefault();
            }
          }}
        >
          <div className="flex flex-column p-3">
            <textarea
              value={this.state.comment}
              onChange={this.handleCommentsChange}
              placeholder="Comment"
              className="border-2 rounded border-gray-300 p-1"
            ></textarea>

            <button
              className=" bg-pink-300 text-white rounded p-3 m-4 font-bold hover:bg-pink-200"
              type="submit"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
