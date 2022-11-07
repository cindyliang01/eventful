import React, { Component } from "react";

// what to do next: create a new list in app where i can store my feedback comments. then, display it one
// by one in the flashback area.
//testing why it's yellow

class FeedBackForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: "",
    };
  }

  handleFeedbackChange = (event) => {
    this.setState({ feedback: event.target.value });
  };

  render() {
    const { createFeedBack, onePost } = this.props;
    return (
      <div>
        <form
          onSubmit={(event) => {
            if (this.state.feedback !== "") {
              event.preventDefault();
              createFeedBack(this.state.feedback, onePost);
              // createFeedBack(this.state.feedback);

              this.setState({ feedback: "" });
            } else {
              alert("You can't have an empty feedback");
              event.preventDefault();
            }
          }}
        >
          <div className="flex flex-column p-3">
            <textarea
              value={this.state.feedback}
              onChange={this.handleFeedbackChange}
              placeholder="Note down what you learned"
              className="border-2 rounded border-gray-300 p-1"
            ></textarea>

            <div className="flex flex-row">
              <div className="flex flex-grow"></div>
              <button
                className=" hover:bg-transparent bg-blue-300 hover:text-blue-500 text-gray-100 font-semibold mt-3  py-2 px-4 border rounded"
                type="submit"
              >
                Internalize
              </button>
              <div className="flex flex-grow"></div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FeedBackForm;
