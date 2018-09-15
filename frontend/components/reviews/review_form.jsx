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

    if (this.props.component === "tripsIndex") {
      if (this.props.requestType === "create") {
        this.props
          .processForm({
            body: this.state.body,
            rating: this.state.rating,
            home_id: this.props.homeId,
            booking_id: this.props.bookingId
          })
          .then(() => this.props.updateReviewedBooking(this.props.bookingId))
          .then(this.props.closeModal);
      } else if (this.props.requestType === "update") {
        this.props
          .updateForm({
            body: this.state.body,
            rating: this.state.rating,
            home_id: this.props.homeId,
            booking_id: this.props.bookingId,
            id: this.props.reviewId
          })
          .then(this.props.closeModal);
      }
    } else if (this.props.component === "homeShow") {
      this.props
        .processForm({
          body: this.state.body,
          rating: this.state.rating,
          home_id: this.props.homeId,
          booking_id: this.props.bookingId
        })
        .then(() => this.props.updateReviewedBooking(this.props.bookingId))
        .then(() => this.props.fetchHome(this.props.homeId))
        .then(this.props.closeModal);
    }
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
          <div onClick={this.props.closeModal} className="review-close-x">
            X
          </div>

          <div className="review-form-text-1">
            Rate your stay at this brisk location!
          </div>

          <Rating
            start={0}
            stop={5}
            fullSymbol={
              <FontAwesomeIcon icon="star" color="#7595bf" size="2x" />
            }
            emptySymbol={
              <FontAwesomeIcon
                icon={["far", "star"]}
                color="#7595bf"
                size="2x"
              />
            }
            initialRating={this.state.rating}
            onChange={rate => this.update("rating", rate)}
          />

          <div className="review-form-text-2">
            Let us know! How was your stay?
          </div>

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
            value={"Submit"}
            className="review-submit-button"
          />
        </form>
      </div>
    );
  }
}

export default ReviewForm;
