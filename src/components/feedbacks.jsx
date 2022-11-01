import React, { Component } from "react";
import FeedBack from "./feedback";

class FeedBacks extends Component {
  render() {
    const { listOfFeedBacks } = this.props;
    return (
      <div>
        {" "}
        {listOfFeedBacks.map((feedback12) => (
          <FeedBack
            oneFeedBack={feedback12}
            key={feedback12.id}
            // specific={feedback12.feedback}
          />
        ))}
        {/* <FeedBack></FeedBack> */}
      </div>
    );
  }
}

export default FeedBacks;
