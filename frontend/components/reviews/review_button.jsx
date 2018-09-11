import React from "react";

const ReviewButton = props => {
  const review = props.review;
  const bookingId = props.bookingId;
  const homeId = props.homeId;

  if (!review) {
    return (
      <span>
        <button
          onClick={() => props.openReviewModal("review", homeId, bookingId)}
        >
          Review Trip
        </button>
      </span>
    );
  } else return <div />;
};

export default ReviewButton;
