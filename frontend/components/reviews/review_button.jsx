import React from "react";

const ReviewButton = props => {
  const review = props.review;
  const bookingId = props.bookingId;
  const homeId = props.homeId;

  let component;
  if (props.homeShow) component = "homeShow";
  else if (props.tripsIndex) component = "tripsIndex";

  if (!review) {
    return (
      <span>
        <input
          type="submit"
          className="review-button"
          value={"Review"}
          onClick={() =>
            props.openReviewModal("review", homeId, bookingId, component)
          }
        />
      </span>
    );
  } else return <div />;
};

export default ReviewButton;
