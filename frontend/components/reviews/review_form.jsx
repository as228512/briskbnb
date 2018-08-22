import React from "react";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      body: ""
    };
  }

  render() {
    return (
      <div>
        <strong>REVIEW FORM HERE</strong>
      </div>
    );
  }
}

export default ReviewForm;
