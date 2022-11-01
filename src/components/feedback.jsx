import React, { Component } from "react";

//what to do next, hook individual feedbacl with corresponding flashcard

class FeedBack extends Component {
  render() {
    // const { oneFeedBack } = this.props;
    return (
      <React.Fragment>
        <div>{this.displayFeedback()}</div>
      </React.Fragment>
    );
  }

  displayFeedback() {
    const { feedback } = this.props.oneFeedBack;
    return feedback;
  }
}

export default FeedBack;
