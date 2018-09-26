import React from "react";
import { withRouter } from "react-router-dom";

import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    let body = "";
    let rating = 0;
    if (props.review) {
      body = props.review.body;
      rating = props.review.rating;
    }

    this.state = {
      body: body,
      rating: rating
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (
      this.props.component === "tripsIndex" ||
      this.props.component === "singleComment"
    ) {
      if (this.props.requestType === "create") {
        this.props
          .processForm({
            body: this.state.body,
            rating: this.state.rating,
            home_id: this.props.homeId,
            booking_id: this.props.bookingId
          })
          .then(
            this.props.updateReviewedBooking({
              bookingId: this.props.bookingId,
              reviewed: true
            })
          )
          .then(this.props.fetchHome(this.props.homeId))
          .then(this.props.closeModal);
      } else if (this.props.requestType === "update") {
        this.props
          .updateForm({
            id: this.props.review.id,
            body: this.state.body,
            rating: this.state.rating,
            home_id: this.props.homeId,
            booking_id: this.props.bookingId,
            reviewed: true
          })
          .then(this.props.fetchHome(this.props.homeId))
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
        .then(
          this.props.updateReviewedBooking({
            bookingId: this.props.bookingId,
            reviewed: true
          })
        )
        .then(this.props.fetchHome(this.props.homeId))
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

  componentWillReceiveProps(nextProps) {
    let body, rating;

    if (nextProps.errors.includes("Body can't be blank")) {
      body = "Body can't be blank";
    } else body = this.state.body;

    if (nextProps.errors.includes("Rating must be greater than 0")) {
      rating = "Rating must be greater than 0";
    } else if (nextProps.errors.includes("Rating must be less than 6")) {
      rating = "Rating must be less than 6";
    } else rating = this.state.rating;

    this.setState({
      body: body,
      rating: rating
    });
  }

  clearField(field) {
    let defaultValue;
    field === "body" ? (defaultValue = "") : (defaultValue = 0);
    return e =>
      this.setState({
        [field]: defaultValue
      });
  }

  starRating() {
    if (
      this.state.rating === "Rating must be greater than 0" ||
      this.state.rating === "Rating must be less than 6"
    ) {
      return (
        <Rating
          start={0}
          stop={5}
          fullSymbol={<FontAwesomeIcon icon="star" color="red" size="2x" />}
          emptySymbol={
            <FontAwesomeIcon icon={["far", "star"]} color="red" size="2x" />
          }
          initialRating={this.state.rating}
          onChange={rate => this.update("rating", rate)}
        />
      );
    } else {
      return (
        <Rating
          start={0}
          stop={5}
          fullSymbol={<FontAwesomeIcon icon="star" color="#7595bf" size="2x" />}
          emptySymbol={
            <FontAwesomeIcon icon={["far", "star"]} color="#7595bf" size="2x" />
          }
          initialRating={this.state.rating}
          onChange={rate => this.update("rating", rate)}
        />
      );
    }
  }

  textBody() {
    if (this.state.body === "Body can't be blank") {
      return (
        <textarea
          type="text"
          value={this.state.body}
          onChange={this.update("body")}
          onFocus={this.clearField("body")}
          className="review-error-body"
          maxLength="500"
          placeholder=" Body can't be blank"
        />
      );
    } else
      return (
        <textarea
          type="text"
          value={this.state.body}
          onChange={this.update("body")}
          className="review-body"
          maxLength="500"
          placeholder=" Comments"
        />
      );
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

          {this.starRating()}

          <div className="review-form-text-2">
            Let us know! How was your stay?
          </div>

          {this.textBody()}

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
