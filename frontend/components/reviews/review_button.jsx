import React from "react";

const ReviewButton = props => {
  const modalType = "review";
  const review = props.review;
  const bookingId = props.bookingId;
  const homeId = props.homeId;
  const reviewId = props.reviewId;

  let component;
  let isHomeShow = props.homeShow;
  isHomeShow ? (component = "homeShow") : (component = "tripsIndex");

  if (!review && component === "tripsIndex") {
    const requestType = "create";

    return (
      <span className="trips-review-button-cntr">
        <input
          className="trips-review-button"
          type="submit"
          value={"Write Review"}
          onClick={() =>
            props.openReviewModal(
              modalType,
              homeId,
              bookingId,
              component,
              requestType
            )
          }
        />
      </span>
    );
  } else if (review && component === "tripsIndex") {
    return (
      <span className="trips-review-button-cntr">
        <input
          className="trips-review-update-button"
          type="submit"
          value={"Edit Review"}
          onClick={() =>
            props.openReviewModal(
              modalType,
              homeId,
              bookingId,
              component,
              "update",
              reviewId
            )
          }
        />
        <input
          className="trips-review-delete-button"
          type="submit"
          value={"Delete Review"}
          onClick={() =>
            props
              .deleteReview(reviewId, homeId)
              .then(() =>
                props.updateReviewedBooking({
                  bookingId: bookingId,
                  reviewed: false
                })
              )
              .then(() => props.fetchHome(homeId))
          }
        />
      </span>
    );
  } else if (!review && component === "homeShow") {
    return (
      <input
        className="home-show-review-button"
        type="submit"
        value={"Review"}
        onClick={() =>
          props.openReviewModal(modalType, homeId, bookingId, component)
        }
      />
    );
  } else return <div />;
};

export default ReviewButton;
