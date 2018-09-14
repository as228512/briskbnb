import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewButtonContainer from "../reviews/review_button_container";

import SingleComment from "./single_comment";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  promptUserReview() {
    if (this.props.pendingReviews.length > 0) {
      const pendingReview = this.props.pendingReviews[0];
      const options = { month: "short", year: "numeric" };
      const englishDate = new Date(pendingReview[0]).toLocaleDateString(
        "en-US",
        options
      );

      return (
        <div className="pending-review-cntr">
          <ul className="pending-review-text-v1">
            <li>{`You stayed here in ${englishDate}.`}</li>
            <li>Let us know what you thought!</li>
          </ul>
          <ReviewButtonContainer
            homeShow={true}
            review={false}
            bookingId={pendingReview[3]}
            homeId={pendingReview[2]}
          />
        </div>
      );
    } else
      return (
        <ul className="pending-review-text-v2">
          <li>Why not be the first?</li>
        </ul>
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
            initialRating={this.props.reviewStats.averageRating}
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
          {this.promptUserReview()}
        </h1>
      );
    } else {
      return (
        <h1 className="average-rating">
          <li>No reviews just yet.</li>
          {this.promptUserReview()}
        </h1>
      );
    }
  }

  render() {
    const reviews = this.props.reviews;
    const commenters = this.props.commenters;
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
          const commenterInfo = commenters[review.user_id] || {};

          return (
            <SingleComment
              review={review}
              commenterInfo={commenterInfo}
              key={review.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Comments;
