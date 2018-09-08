import React from "react";
import { withRouter } from "react-router-dom";

import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props
      .processForm({
        body: this.state.body,
        rating: this.state.rating,
        home_id: this.props.homeId,
        booking_id: this.props.bookingId
      })
      .then(() => this.props.updateReviewedBooking(this.props.bookingId))
      .then(this.props.closeModal);
  }

  update(field, rate = null) {
    if (!rate) {
      return e =>
        this.setState({
          [field]: e.currentTarget.value
        });
    } else {
      return this.setState({
        [field]: rate
      });
    }
  }

  render() {
    return (
      <div className="review-form-container">
        <form onSubmit={this.handleSubmit} className="review-form">
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>

          <div>Rate your stay at this brisk location!</div>

          <Rating
            start={0}
            stop={5}
            fullSymbol={
              <FontAwesomeIcon icon="star" color="#7595bf" size="3x" />
            }
            emptySymbol={
              <FontAwesomeIcon
                icon={["far", "star"]}
                color="#7595bf"
                size="3x"
              />
            }
            initialRating={this.state.rating}
            onChange={rate => this.update("rating", rate)}
          />

          <div>Let us know! How was your stay?</div>

          <textarea
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            className="review-body"
            maxLength="500"
            placeholder=" Comments"
          />

          <input
            type="submit"
            valiue={"Submit"}
            className="review-submit-button"
          />
        </form>
      </div>
    );
  }
}

export default ReviewForm;
