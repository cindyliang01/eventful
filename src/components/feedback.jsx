import React, { Component } from "react";

class FeedBack extends Component {
  render() {
    const { onePost } = this.props;
    return (
      <React.Fragment>
        {onePost.feedback !== "" ? (
          <div className="text-center font-bold text-lg pt-4 text-gray-500">
            {this.displayFeedback()}
          </div>
        ) : (
          <div className="text-center font-bold text-lg pt-4 text-gray-500">
            N/A. Please fill out what idea you want to internalize!
          </div>
        )}
      </React.Fragment>
    );
  }

  displayFeedback() {
    const { feedback } = this.props.onePost;
    return feedback;
  }
}

export default FeedBack;

//done
