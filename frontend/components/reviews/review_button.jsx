import React from "react";

const ReviewButton = props => {
  const review = props.review;
  const bookingId = props.bookingId;
  const homeId = props.homeId;

  let component;
  if (props.homeShow) component = "homeShow";
  else if (props.tripsIndex) component = "tripsIndex";

  if (!review && component === "tripsIndex") {
    return (
      <span className="trips-review-button-cntr">
        <input
          className="trips-review-button"
          type="submit"
          value={"Review"}
          onClick={() =>
            props.openReviewModal("review", homeId, bookingId, component)
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
