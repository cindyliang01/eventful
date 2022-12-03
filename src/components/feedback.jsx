import React, { Component } from "react";

class FeedBack extends Component {
  render() {
    const { onePost } = this.props;
    return (
      // <React.Fragment>
      //   <div>{this.displayFeedback()}</div>
      // </React.Fragment>

      // {onePost.feedback.length > 0  ? (
      //   <div className="text-gray-400">
      //     {" "}
      //     {
      //       <React.Fragment>
      //       <div>{this.displayFeedback()}</div>
      //     </React.Fragment>

      //     }
      //   </div>
      // ) : (
      //   <span className="text-gray-400 p-2 text-center">No comments</span>
      // )}

      <React.Fragment>
        {onePost.feedback !== "" ? (
          <div className="text-center font-bold text-lg pt-4">
            {this.displayFeedback()}
          </div>
        ) : (
          <div className="text-center font-bold text-lg pt-4">
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
