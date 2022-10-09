// const FlashCard = () => {
//   return <div>FlashCard</div>;
// };

// export default FlashCard;

import React, { Component } from "react";
class FlashCard extends Component {
  render() {
    const { flashCard } = this.props;
    return (
      <React.Fragment>
        <div>hi</div>
        <div>hi</div>
        {flashCard}
      </React.Fragment>
    );
  }
}

export default FlashCard;
