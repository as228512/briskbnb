import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewButtonContainer from "../reviews/review_button_container";

import SingleComment from "./single_comment";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  formatPendingReviewText() {
    if (this.props.pendingReviews.length > 0) {
      const pendingReview = this.props.pendingReviews[0];
      const options = { month: "short", year: "numeric" };
      const englishDate = new Date(pendingReview[0]).toLocaleDateString(
        "en-US",
        options
      );

      return (
        <ul className="pending-review-text">
          <br />
          <li>{`You stayed here in ${englishDate}.`}</li>
          <li>
            Be the first to tell everyone what you think!
            <span>
              <ReviewButtonContainer
                homeShow={true}
                review={false}
                bookingId={this.props.home.bookingIds[0]}
                homeId={pendingReview[2]}
              />
            </span>
          </li>
        </ul>
      );
    } else
      return (
        <li className="pending-review-text">
          Why not book a stay and be the first?
        </li>
      );
  }

  timesReviewed(numberOfReviews) {
    if (numberOfReviews > 0) {
      let pluralReviews = "Reviews";
      if (numberOfReviews === 1) pluralReviews = "Review";

      return (
        <h1 className="average-rating">
          {numberOfReviews} {pluralReviews}{" "}
          <Rating
            className="comment-star-rating"
            initialRating={this.props.reviewData.averageRating}
            emptySymbol={
              <FontAwesomeIcon
                icon={["far", "star"]}
                color="#7595bf"
                size="xs"
              />
            }
            fullSymbol={
              <FontAwesomeIcon icon="star" color="#7595bf" size="xs" />
            }
            readonly
          />
        </h1>
      );
    } else {
      let pendingReviewText = this.formatPendingReviewText();

      return (
        <h1 className="average-rating">
          <ul>
            <li>No reviews just yet.</li>
            {pendingReviewText}
          </ul>
        </h1>
      );
    }
  }

  render() {
    const reviews = this.props.reviews;
    const numberOfReviews = this.props.reviews.length;
    const reviewText = this.timesReviewed(numberOfReviews);

    return (
      <div>
        <div>
          <div className="top-rating-border" />

          {reviewText}

          <div className="comments-border" />
        </div>

        {reviews.map(review => {
          return (
            <SingleComment
              review={review}
              fetchCommenterInfo={this.props.fetchCommenterInfo}
              key={review.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Comments;
