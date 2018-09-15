import React from "react";

const ReviewButton = props => {
  const review = props.review;
  const bookingId = props.bookingId;
  const homeId = props.homeId;
  const reviewId = props.reviewId;

  let component;
  if (props.homeShow) component = "homeShow";
  else if (props.tripsIndex) component = "tripsIndex";

  if (!review && component === "tripsIndex") {
    const requestType = "create";

    return (
      <span className="trips-review-button-cntr">
        <input
          className="trips-review-button"
          type="submit"
          value={"Review"}
          onClick={() =>
            props.openReviewModal(
              "review",
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
    const requestType = "update";

    return (
      <span className="trips-review-button-cntr">
        <input
          className="trips-review-button"
          type="submit"
          value={"Edit Review"}
          onClick={() =>
            props.openReviewModal(
              "review",
              homeId,
              bookingId,
              component,
              requestType,
              reviewId
            )
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
          props.openReviewModal("review", homeId, bookingId, component)
        }
      />
    );
  } else return <div />;
};

export default ReviewButton;
