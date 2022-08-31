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
            event.preventDefault();
            createComment(this.state.comment, onePost);
            this.setState({ comment: "" });
          }}
        >
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentsChange}
            placeholder="Comment"
          ></textarea>

          <button className="btn btn-secondary btn-sm m-2" type="submit">
            Comment
          </button>
        </form>
      </div>
    );
  }
}

export default CommentForm;